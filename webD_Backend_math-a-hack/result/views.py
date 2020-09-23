from rest_framework import exceptions, generics, permissions
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from .models import Quiz,Question,Option
from .models import Response as StudentResponse
from authentication.models import Student
from django.shortcuts import get_object_or_404
from .serializers  import *
from django.core.exceptions import ObjectDoesNotExist
import re
from result.constants import *

BACKEND_HOST = 'https://api1.mathmaterate.com'

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated, ])
def analysis(request):
	"""
	Gets the question-wise analysis for a particular quiz for the student
	Input: quiz_id (IntegerField)
	Return: An array of question, responses, error type and some feedback in a valid JSON format OR an error

	Get the questions (through quiz) and the options marked (through Response). Everything is sorted by the ID of the question to maintain the order.
	For each question, if a matching option with the same question_id is found:
		If MCQ, whatever is the option use that. 
		If Numerical type/Single word, use the option marked to get type of response and replace the option text with the value in the custom_option for that question. Note that you need to store an option (maybe with NULL value in option_text) explcitly to accomodate answers that don't belong to a particular error code (i.e., unclassified)

		If matching option not found, then question is unattempted.
	For MCQ questions. l

	To check the mapping of codes, look at constants.py
	"""

	serializer = QuizIDSerializer(data=request.query_params)
	serializer.is_valid(raise_exception=True)
	validated_data = serializer.validated_data

	try:
		#quiz_id = Quiz.objects.get(pk=validated_data['quiz_id'])
		#student_id = request.user.student
		# responses = StudentResponse.objects.get(quiz_id__id=validated_data['quiz_id'],student_id=request.user.student)
		
		responses = request.user.student.response_set.get(quiz_id__id=validated_data['quiz_id'])
		quiz = responses.quiz_id

		questions = quiz.question_set.all().order_by('id')  # sort options marked in order of questions

		marked_responses = responses.responses.all().order_by('question__id')

		RES = []
		"""
		Getting the stats of the quiz. For the difficulty levels, the values are lists indicating 
		[# correctly answered questions in that category, total # questions in the category]. For error labels,
		the values are # errors of that category
		"""
		stats = {
					"Easy": [0,0], 
					"Medium": [0,0], 
					"Hard": [0,0], 
					"Misconception": 0, 
					"Silly mistake": 0, 
					"Unattempted": 0, 
					"Unclassified": 0, 
					"Chapter_Stats":{}
		}
		difficulty_code = dict(DIFFICULTY)
		error_code = dict(ERROR_CLASS)
		total_errors = 0

		

		j = 0


		for q in questions:
			# opt = q.option_set.get(opt_err_label=0) # 0 means correct
			#increments the total number of questions for the difficulty level the question belongs to:
			stats[difficulty_code[q.q_difficulty]][1] += 1
			res = {
					"q_id" : q.id,
					"q_type" : q.q_type,
					"q_text": re.sub(r'src="@@PLUGINFILE@@/([^"]+)"',r'src="'+BACKEND_HOST+r'/media'+r'/quiz/'+str(quiz.id)+r'/question/'+str(q.id)+r'/\1"',q.q_text),
					"q_weight": q.q_weight,
					"q_difficulty": q.q_difficulty,
					"solution": q.ans_expl
				}

			marked_opt_for_q = None			

			if q.id == marked_responses[j].question.id:
				marked_opt_for_q = marked_responses[j]

				# go to next marked option if it exists
				j += 1 if j+1 < len(marked_responses) else 0
				
			if q.q_type == 1:  # MCQ
				# Get all the options
				opts = q.option_set.all()
				choices = []
				opt_feedback = None
				marked_opt_err_label = -1

				for opt in opts:
					curr_opt = {
							"opt_id" : opt.id,
							"opt_text" : re.sub(r'src="@@PLUGINFILE@@/([^"]+)"',r'src="'+BACKEND_HOST+r'/media'+r'/quiz/'+str(quiz.id)+r'/option/'+str(opt.id)+r'/\1"',opt.opt_text),
							"opt_err_label" : opt.opt_err_label,
							"marked" : False
							}

					if opt == marked_opt_for_q:
						curr_opt['marked'] = True
						opt_feedback = opt.opt_feedback
						marked_opt_err_label = opt.opt_err_label


					choices.append(curr_opt)

				res.update({
					"options" : choices,
					"mark_obtained" : marked_opt_for_q.opt_weight * q.q_weight if marked_opt_for_q is not None else 0.0,
					"opt_feedback": opt_feedback,
					"opt_err_label": marked_opt_err_label
					})
				if marked_opt_err_label==0:
					stats[difficulty_code[q.q_difficulty]][0] += 1
				elif marked_opt_err_label==4:
					stats["Misconception"] += 1
					stats["Silly mistake"] += 1
				else:
					stats[error_code[marked_opt_err_label]] += 1


			else: #integer type questions and one word answer type questions
				pass

			RES.append(res)

		stats.update({
			'total_marks': quiz.total_marks,
			'marks_obtained': responses.marks_obtained,
			'rank': responses.rank,
			})

		RES.append(stats)
		"""
		multi_flag = False	 # set True if a student has marked a question bu 

		while i<len(questions) and j<len(marked_responses):
			# question not attempted
			if questions[i].id < marked_responses[j].question.id:
				if not multi_flag:
					res = {"q_id":questions[i].id,"ans":"null"}
					RES.append(res)

				i+=1
			
			# question attempted
			else:
				res = {"q_id":questions[i].id,"ans":marked_responses[j].opt_name}
				RES.append(res)

				multi_flag = True
				j += 1
				# i not incremented to accomodate multiple correct answers
		"""

		return Response(RES)
    
	except ObjectDoesNotExist:
		raise exceptions.NotFound("No entry found")
@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated, ])
def overview(request):
	"""
	Get the result overview in the dashboard (the content displayed as soon the student logs in)
	Input (optional): Quiz ID
	Return: the details for the quiz

	 - if student has not attempted any question, value in 'quiz' is null in returned JSON
	 - else if there some valid input value in quiz_id, return the data for that particular quiz
	 - else (not input), the data for the latest quiz is sent

	"""
	try:
		responses = request.user.student.response_set.all().order_by('-id')

		if len(responses) == 0:
			return Response({
				"name" : request.user.student.name,
				"quiz" : None
				})

		elif request.query_params.get("quiz_id") is not None:
			serializer = QuizIDSerializer(data=request.query_params)
			serializer.is_valid(raise_exception=True)
			validated_data = serializer.validated_data
			responses = responses.get(quiz_id__id=validated_data['quiz_id'])

		else:	
			responses = responses.first()

		quiz = responses.quiz_id

		return Response({
			"name" : request.user.student.name,
			"quiz" : quiz.name,
			"marks_obtained" : responses.marks_obtained,
			"total_marks" : quiz.total_marks,
			"rank" : responses.rank,
			"total_attempts" : quiz.tot_attempts,
			"highest_mark" : quiz.max_mark,
			"difficulty" : quiz.difficulty,
			"performance" : responses.performance,
			"quiz_id" : quiz.id
			})

	except ObjectDoesNotExist:
		raise exceptions.NotFound("No entry found")


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated, ])
def attempted_quizzes(request):
	"""
	Get the list of all the quizzes that the student has attempted.
	"""
	try:
		responses = request.user.student.response_set.all().order_by('-id')

		RES = []

		for response in responses:
			RES.append({
				"id": response.quiz_id.id,
				"name": response.quiz_id.name
				})

		return Response(RES)

	except ObjectDoesNotExist:
		raise exceptions.NotFound("No entry found")
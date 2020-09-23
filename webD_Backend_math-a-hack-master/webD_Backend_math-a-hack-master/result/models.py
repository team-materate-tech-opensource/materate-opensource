from django.db import models
from .constants import *
from authentication.models import School, Student
from jsonfield import JSONField
from tinymce.models import HTMLField
import re

def cleanhtml(raw_html):
  # cleanr = re.compile('<.*?>')
  cleanr = re.compile('<.*?>|&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});')
  cleantext = re.sub(cleanr, '', raw_html)
  return cleantext
# Create your models here.

class Quiz(models.Model):
	name = models.CharField(max_length=31, null=True, verbose_name="Quiz Name")
	# questions = models.ForeignKey(Question, on_delete=models.CASCADE, null=True)
	standard = models.PositiveSmallIntegerField(choices=STUDENT_STD, null=True, blank=True, verbose_name="Standard/Class")
	chap_name = models.CharField(max_length=63, blank=True, verbose_name="Chapter Name")

	start_time = models.DateTimeField(verbose_name="Start Time", blank=True, null=True)
	end_time = models.DateTimeField(verbose_name="End Time", blank=True, null=True)
	duration = models.PositiveIntegerField(verbose_name="Duration (in minutes)", blank=True, null=True)

	total_marks = models.FloatField(verbose_name="Total Marks", default=0, null=True)
	mean = models.FloatField(verbose_name="Mean Marks", default=0, null=True)
	std_dev = models.FloatField(verbose_name="Standard Deviation", default=0, null=True)
	min_mark = models.FloatField(verbose_name="Minimum Marks", default=0, null=True)
	max_mark = models.FloatField(verbose_name="Maximum Marks", default=0, null=True)

	tot_attempts = models.PositiveIntegerField(verbose_name="Total Attempts", default=0, null=True)

	difficulty = models.SmallIntegerField(
        choices=DIFFICULTY, 
        null = True,
        default=0,
        verbose_name="Difficulty of Quiz", 
        help_text="""
        The difficulty of the question <br>
        <b>-1 </b> Easy <br />
        <b>0 </b> Medium <br />
        <b>1 </b> Hard <br />
        """
    )
	
	def __unicode__(self):
		return self.name

	def __str__(self):
		return self.name


class Question(models.Model):
	quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, null=True)

	q_type = models.PositiveIntegerField(choices=Q_TYPE, null=True, verbose_name="Question Type",
		help_text="""
		Choose the type of question <br />
		<b>1</b> Single Correct Type <br />
		<b>2</b> Integer Type <br />
		<b>3</b> One word Type <br />
		"""
	)

	q_name = models.CharField(max_length=7, null=True, verbose_name="Question Name")
	q_text = HTMLField(null=True, verbose_name="Question Text (in HTML)")

	q_weight = models.FloatField(verbose_name="Question Weightage",null=True, default=0)

	q_difficulty = models.SmallIntegerField(
	    choices=DIFFICULTY, 
	    null = True,
	    default=0,
	    verbose_name="Difficulty of Question", 
	    help_text="""
	    The difficulty of the question <br>
	    <b>-1 </b> Easy <br />
	    <b>0 </b> Medium <br />
	    <b>1 </b> Hard <br />
	    """
	)

	ans_expl = HTMLField(null=True, blank=True, verbose_name="Explanation of the answer (wth steps)")

	def __unicode__(self):
		return self.q_name
	
	def __str__(self):
		return self.q_name


class Option(models.Model):
	question = models.ForeignKey(Question, null=True, on_delete	=models.CASCADE)

	opt_name = models.CharField(max_length=255, null=True, verbose_name="Option Name")

	opt_text = HTMLField(null=True, verbose_name="Option Text (in HTML)")
	
	opt_err_label = models.PositiveSmallIntegerField(
	    choices=ERROR_CLASS, 
	    null = True,
	    default=1,
	    verbose_name="Error class of the option", 
	    help_text="""
	    The error class of the option <br>
	    <b>0</b> Correct <br />
	    <b>1</b> Unclassified <br />
	    <b>2</b> Silly mistake<br />
	    <b>3</b> Misconception <br />
	    <b>4</b> Silly mistake & Misconception<br />
	    """
	)

	opt_err_code = models.CharField(max_length=15,blank=True, null=True,verbose_name="Error code")

	opt_feedback = HTMLField(blank=True, null=True, verbose_name="Feedback for option (in HTML)")

	opt_weight = models.FloatField(verbose_name="Weightage for the option (between -1 and 1)", default=0)

	def __unicode__(self):
		return cleanhtml(self.opt_text)
	
	def __str__(self):
		return cleanhtml(self.opt_text)


class Response(models.Model):

	student_id = models.ForeignKey(Student,verbose_name="Student ID",null=True,on_delete=models.SET_NULL)
	quiz_id = models.ForeignKey(Quiz,verbose_name="Quiz ID",null=True,on_delete=models.CASCADE)
	responses = models.ManyToManyField(Option,verbose_name="Responses")
	custom_answers =  JSONField(verbose_name="Custom Answers",null=True, blank=True,
    	help_text="""
        This is a JSON field to store custom answers entered by the student wherever custom input is possible. <br />
        Use the <i>Question ID</i> as key and <i>answer marked</i> as the value pair. <br />
        Whenever such a question is encountered, the value in option text (opt_text) will get replaced by the value in answer marked. 
        """)
	time_stats = JSONField(verbose_name="Time spent in each question",null=True, blank=True,
		help_text="""
		This is a JSON Field to store time spent in each question by the student. <br />
		""")
	marks_obtained = models.FloatField(null=True, default=0, verbose_name="Marks obtained")
	rank = models.PositiveIntegerField(null=True, default=0, blank=True, verbose_name="Rank in the quiz")

	performance = models.SmallIntegerField(
	    choices=PERFORMANCE, 
	    null = True,
	    blank=True,
	    default=1,
	    verbose_name="Performance of the Student", 
	    help_text="""
	    The overall performance of the student in the quiz. <br />
	    <b>0</b> Needs improvement <br />
	    <b>1</b> Good <br />
	    <b>2</b> Excellent <br />
	    """
	)


	def __unicode__(self):
		return str(self.quiz_id.id)+':'+self.student_id.user.username

	def __str__(self):
		return str(self.quiz_id.id)+':'+self.student_id.user.username

from django.contrib import admin
from .models import Quiz, Question, Option, Response

# Register your models here.

@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
	readonly_fields = ('id','total_marks','mean','std_dev','min_mark','max_mark','tot_attempts')
	fieldsets = (
		(None, {
			'fields' : ('id','name','standard','chap_name',('start_time','end_time'),'duration','difficulty')
		}),
		('Statistics (Read-only)',{
			'classes': ('collapse',),
			'fields' : ('total_marks','mean','std_dev','min_mark','max_mark','tot_attempts')
		})
	)
	list_display = ('id','name','standard','number_of_questions','start_time','duration')
	search_fields = ('id','name','standard')
	date_hierarchy = 'start_time'
	def number_of_questions(self,obj):
		return obj.question_set.count()

class OptionInline(admin.StackedInline):
    model = Option
    exclude = ('opt_name',)

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
	empty_value_display = '-Not Assigned-'
	inlines = [
	    OptionInline,
	]
	list_display=('q_name','quiz')
	search_fields = ('q_name','quiz__standard','quiz__name')
	list_filter = ('quiz',)


@admin.register(Option)
class OptionAdmin(admin.ModelAdmin):
	exclude = ('opt_name',)
	list_display = ('__str__','question','quiz')
	def quiz(self,obj):
		return obj.question.quiz
	search_fields = ('question','question__quiz','opt_name','__str__')
	list_filter = ('question__quiz',)

@admin.register(Response)
class ResponseAdmin(admin.ModelAdmin):
	filter_horizontal = ('responses',)
	readonly_fields = ('rank','time_stats')
	list_display = ('username','quiz_id')
	search_fields = ('student_id__name','student_id__user__username','quiz_id__id','quiz_id__name')
	def username(self,obj):
		return obj.student_id.user.username
	list_filter = ('quiz_id',)	#'student_id__user__username')

from django.urls import path
from . import views

app_name = 'result'

urlpatterns = [
    path('analysis/', views.analysis, name='analysis'),
    path('overview/', views.overview, name='overview'),
    path('attempted_quizzes/', views.attempted_quizzes, name='attempted_quizzes'),
]
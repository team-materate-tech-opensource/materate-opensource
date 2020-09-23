from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'authentication'

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', views.LoginView.as_view() , name='login'),
    path('signup/', views.user_register, name='signup'),
    path('logout/', views.LogoutAndBlacklistRefreshTokenForUserView.as_view() , name='logout'),
    path('student/profile/', views.StudentView.as_view(), name='profile'),
    path('list/schools/',views.SchoolView.as_view() , name='school_list'),
    path('account/update/username/',views.ChangeUsernameView.as_view() , name='change_username'),
    path('account/update/password/',views.ChangePasswordView.as_view() , name='change_password'),
]
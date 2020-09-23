from django.contrib.auth import authenticate, login, logout
from rest_framework import exceptions, generics, permissions, status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers  import *
from rest_framework.decorators import permission_classes, authentication_classes
from django.db import IntegrityError
from django.core.exceptions import ObjectDoesNotExist
from .models import Student, School
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken

def user_register(request):
	pass

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    serializer_class = LogoutSerializer

    def post(self, request):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            validated_data = serializer.validated_data
            refresh_token = validated_data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class LoginView(generics.GenericAPIView):
    """
    To Authenticate a user and return necessary details.
    """
    serializer_class = LoginSerializer
    permission_classes = [ permissions.AllowAny, ]
    authentication_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data
        username = validated_data['username']
        password = validated_data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            tokens = get_tokens_for_user(user)
            print(tokens)
            return Response({
                'detail': 'ok',
                'role': user.role,
                'has_changed_username': user.has_changed_username,
                'access': tokens['access'],
                'refresh': tokens['refresh']
            })
        else:
            raise exceptions.AuthenticationFailed("Invalid Credentials")


class ChangeUsernameView(generics.GenericAPIView):
    """
    To Change username of an Authenticated User depending on
    has_changed_username property of the user.
    """
    permission_classes = (permissions.IsAuthenticated, )
    serializer_class = ChangeUsernameSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = {'detail': 'ok'}
        return Response(data=data)

class ChangePasswordView(generics.GenericAPIView):
    """
    To Change password of an Authenticated User.
    """
    permission_classes = (permissions.IsAuthenticated, )
    serializer_class = ChangePasswordSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = {'detail': 'ok'}
        return Response(data=data)

class StudentView(generics.RetrieveUpdateAPIView):
    permission_classes = (permissions.IsAuthenticated, )
    serializer_class = StudentSerializer
    lookup_field = 'user'

    def get_object(self):
        return get_object_or_404(Student, user=self.request.user)

class SchoolView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated, )
    serializer_class = SchoolSerializer
    queryset = School.objects.all()
    
    def perform_create(self, serializer):
        try:
            School.objects.create(
                created_by = self.request.user,
                **serializer.validated_data
            )
        except IntegrityError:
            raise exceptions.ParseError("A student cannot create more than one school")

class ContactView(generics.CreateAPIView):
    serializer_class = ContactSerializer

class SubscriberView(generics.CreateAPIView):
    serializer_class = SubscriberSerializer


"""
@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def user_profile(request):
    '''
    Get user profile fields.
    entry = True means the corresponding entry is already present. profile is also returned.
    entry = False means the corresponding entry is not present. profile is returned but is empty.
    '''
    try: 
        profile = Student.objects.get(user=request.user)
        print(profile)

        return Response({  'entry':'true',
                    'profile':  {   'name' : profile.name,
                                    'city' : profile.city,
                                    'school' : SchoolSerializer(profile.school).data,
                                    'standard' : profile.standard,
                                    'email' : profile.email,
                                    'contact_no' : profile.contact_no,
                                    'guardian_name' : profile.guardian_name,
                                    'guardian_contact' : profile.guardian_contact,
                                    'guardian_address' : profile.guardian_address
                                }
                    })
    except ObjectDoesNotExist:
        return Response({  'entry':'false',
                    'profile': {}
                })

@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
def update_user_profile(request):
    '''
    Update user profile fields
    '''
    
    serializer = StudentSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    
    profile = Student.objects.get_or_create(user=request.user)
    
    try:
        school = School.objects.get(id=serializer.validated_data['school'])   # Handle this exception

        profile=profile[0]
        
        profile.name = serializer.validated_data['name']
        profile.city = serializer.validated_data['city']
        profile.school = school
        profile.standard = serializer.validated_data['standard']
        profile.email = serializer.validated_data['email']
        profile.contact_no = serializer.validated_data['contact_no']
        profile.guardian_name = serializer.validated_data['guardian_name']
        profile.guardian_contact = serializer.validated_data['guardian_contact']
        profile.guardian_address = serializer.validated_data['guardian_address']
        profile.save()
        

        data = {'detail': 'Success'}
        return Response(data=data)

    except ObjectDoesNotExist:
            raise exceptions.NotFound("School not found")
"""


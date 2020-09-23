from rest_framework import serializers, exceptions
from django.contrib.auth import get_user_model
from .models import School, Student

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class LogoutSerializer(serializers.Serializer):
    refresh_token = serializers.CharField()

class ChangeUsernameSerializer(serializers.Serializer):
    username = serializers.CharField()
    confirm_username = serializers.CharField()

    def validate(self, data):
        user = self.context.get("request").user
        if not user.has_changed_username or True:
            if data['username'] != data['confirm_username']:
                raise exceptions.ParseError("Usernames do not match")
            else:
                return data
        else:
            raise exceptions.ParseError("User has already changed username")
    
    def create(self, validated_data):
        user = self.context.get('request').user
        user.username = validated_data['username']
        user.save()
        return user

class ChangePasswordSerializer(serializers.Serializer):
    current_password = serializers.CharField()
    password = serializers.CharField()
    confirm_password = serializers.CharField()

    def validate(self, data):
        if data['password'] == data['confirm_password']:
            user = self.context.get("request").user
            if user.check_password(data['current_password']):
                return data
            else:
                raise exceptions.ParseError("Incorrent Password")
        else:
            raise exceptions.ParseError("Passwords do not match")
    
    def create(self, validated_data):
        user = self.context.get('request').user
        user.set_password(validated_data['password'])
        user.save()
        return user

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = ('name', 'location')
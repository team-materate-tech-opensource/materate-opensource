from rest_framework import serializers, exceptions

class QuizIDSerializer(serializers.Serializer):
    quiz_id = serializers.IntegerField()

from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from api.models import CustomUser
from rest_framework import status
from rest_framework.response import Response


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'avatar']
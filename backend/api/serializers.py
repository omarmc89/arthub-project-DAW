from rest_framework import serializers
from django.contrib.auth.hashers import make_password
import api.models
from .models import *
from rest_framework import status
from rest_framework.response import Response


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'avatar']


class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork
        fields = '__all__'


class ArtistSerializer(serializers.ModelSerializer):
    artworks = ArtworkSerializer(many=True, read_only=True)
    class Meta:
        model = Artist
        fields = ['id', 'nickname', 'user_id', 'artworks']
        depth = 1


class PaintingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Painting
        fields = '__all__'


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'


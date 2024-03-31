from rest_framework import serializers
from api.serializers.ArtworkSerializer import ArtworkSerializer
from api.serializers.CustomUserSerializer import CustomUserSerializer

from django.contrib.auth.hashers import make_password
import api.models
from api.models import Artist
from rest_framework import status
from rest_framework.response import Response


class ArtistSerializer(serializers.ModelSerializer):
    artworks = ArtworkSerializer(many=True, read_only=True)
    user = CustomUserSerializer(read_only=True)

    class Meta:
        model = Artist
        fields = ['id', 'nickname', 'user_id', 'artworks', 'user']
        depth = 1
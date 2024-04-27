from rest_framework import serializers
from django.contrib.auth.hashers import make_password
import api.models
from api.models import *
from rest_framework import status
from rest_framework.response import Response
from api.serializers.ArtworkSerializer import ArtworkSerializer


class PhotoSerializer(serializers.ModelSerializer):
    artwork = ArtworkSerializer(read_only=True)

    class Meta:
        model = Photo
        fields = '__all__'

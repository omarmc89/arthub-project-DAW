from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from api.models import Artwork
from rest_framework import status
from rest_framework.response import Response



class ArtworkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artwork
        fields = '__all__'
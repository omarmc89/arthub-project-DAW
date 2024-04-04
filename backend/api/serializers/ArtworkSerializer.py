from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from api.models import Artwork
from api.serializers.ArtistSerializer import ArtistSerializer
from rest_framework import status
from rest_framework.response import Response


class ArtworkSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer(read_only=True)

    class Meta:
        model = Artwork
        fields = '__all__'

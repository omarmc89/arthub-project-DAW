from rest_framework import serializers
from api.models import Artwork
from api.serializers.ArtistSerializer import ArtistSerializer



class ArtworkSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer(read_only=True)

    class Meta:
        model = Artwork
        fields = '__all__'

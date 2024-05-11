from rest_framework import serializers
from api.serializers.ArtworkSerializer import ArtworkSerializer

from api.models import OrderLine


class OrderLineSerializer(serializers.ModelSerializer):
    artwork = ArtworkSerializer(read_only=True)

    class Meta:
        model = OrderLine
        fields = '__all__'

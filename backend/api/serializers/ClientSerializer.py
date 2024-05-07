from rest_framework import serializers
from api.serializers.CustomUserSerializer import CustomUserSerializer
from api.models import Client


class ClientSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)

    class Meta:
        model = Client
        fields = ['id', 'birth_date', 'user']
        depth = 1

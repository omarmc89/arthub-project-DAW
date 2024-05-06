from rest_framework import serializers
from api.serializers.ClientSerializer import ClientSerializer
from api.models import Address


class AddressSerializer(serializers.ModelSerializer):
    client = ClientSerializer(read_only=True)

    class Meta:
        model = Address
        fields = '__all__'
from rest_framework import serializers
from api.serializers.ClientSerializer import ClientSerializer
from api.serializers.AddressSerializer import AddressSerializer
from api.serializers.OrderLineSerializer import OrderLineSerializer
from api.models import Order


class OrderSerializer(serializers.ModelSerializer):
    client = ClientSerializer(read_only=True)
    address = AddressSerializer(read_only=True)
    orderLine = OrderLineSerializer(read_only=True, many=True)

    class Meta:
        model = Order
        fields = '__all__'

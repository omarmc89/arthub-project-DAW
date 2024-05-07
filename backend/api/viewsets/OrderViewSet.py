from rest_framework import viewsets

from api.serializers.OrderSerializer import OrderSerializer
from api.models import Order, Address, Client
from rest_framework.response import Response
from rest_framework import status


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        client_id = request.data.pop('client_id')
        address_id = request.data.pop('address_id')
        client = Client.objects.get(id=client_id)
        address = Address.objects.get(id=address_id)
        order = Order.objects.create(client=client, address=address, **request.data)
        order_serializer = OrderSerializer(order, many=False)
        return Response(order_serializer.data, status=status.HTTP_201_CREATED)

    def list_orders(self, request, *args, **kwargs):
        params = request.query_params
        client_id = params.get('id')
        orders = Order.objects.filter(client_id = client_id)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data, status.HTTP_200_OK)

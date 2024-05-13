from rest_framework import viewsets
from api.models import Client
from rest_framework import viewsets, generics, status
from api.serializers.AddressSerializer import AddressSerializer
from api.models import Address
from rest_framework.response import Response


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

    def create(self, request, *args, **kwargs):
        # client_id = request.data.pop('client_id')
        data = request.data
        address_serializer = AddressSerializer(data)
        Address.objects.create(**data)
        return Response(address_serializer.data, status=status.HTTP_201_CREATED)

    def get_by_client(self, request, *args, **kwargs):
        params = request.query_params.get('client_id')
        client_id = request.data.get('client_id')
        address = Address.objects.filter(id=client_id)
        addresses_serializer = AddressSerializer(address, many=True)
        return Response(addresses_serializer.data, status.HTTP_200_OK)

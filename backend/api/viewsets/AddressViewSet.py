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
        client_id = request.data.pop('client_id')
        client = Client.objects.get(id=client_id)
        address = Address.objects.get(id=client_id)
        address_serializer = AddressSerializer(address)
        return Response(address_serializer.data, status=status.HTTP_201_CREATED)
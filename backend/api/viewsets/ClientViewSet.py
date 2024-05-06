from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from django.db import IntegrityError

from api.models import CustomUser, Client
from api.serializers.ClientSerializer import ClientSerializer
from api.serializers.CustomUserSerializer import CustomUserSerializer


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

    def create(self, request, *args, **kwargs):
        user = dict()
        client = dict()

        user['username'] = self.request.data.get('username')
        user['first_name'] = self.request.data.get('first_name')
        user['last_name'] = self.request.data.get('last_name')
        user['email'] = self.request.data.get('email')
        user['password'] = self.request.data.get('password')
        user['avatar'] = self.request.data.get('avatar')
        client['birth_date'] = self.request.data.get('birth_date')

        try:
            user = CustomUser.objects.create_user(**user)
        except IntegrityError:
            return Response({'error': 'User already exists'},status=status.HTTP_400_BAD_REQUEST)

        client = Client(**client)
        client.user = user
        client.save()

        return Response({'message': 'User and client created successfully'},
                        status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        print('put on artist view set')
        user_id = request.data.get('id')
        client_id = kwargs.get('pk')
        try:
            user = CustomUser.objects.filter(id=user_id).first()

            user.username = request.data.get('username')
            user.first_name = request.data.get('first_name')
            user.last_name = request.data.get('last_name')
            user.email = request.data.get('email')
            user.avatar = request.data.get('avatar')
            user.save()

            client = Client.objects.filter(id=client_id).first()
            client.birth_date = request.data.get('birth_date')
            client.save()
        except IntegrityError:
            return Response('Problem occurred updating user', status=status.HTTP_404_NOT_FOUND)

        return Response({'message': 'updated'},
                        status=status.HTTP_200_OK)
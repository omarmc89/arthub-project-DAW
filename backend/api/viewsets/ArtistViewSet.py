from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.exceptions import NotFound
from django.db import IntegrityError

from api.models import Artist, CustomUser
from api.serializers.ArtistSerializer import ArtistSerializer
from api.serializers.CustomUserSerializer import CustomUserSerializer



class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

    def create(self, request, *args, **kwargs):
        user = dict()
        artist = dict()

        user['username'] = self.request.data.get('username')
        user['first_name'] = self.request.data.get('first_name')
        user['last_name'] = self.request.data.get('last_name')
        user['email'] = self.request.data.get('email')
        user['password'] = self.request.data.get('password')
        user['avatar'] = self.request.data.get('avatar')
        artist['nickname'] = self.request.data.get('nickname')

        user_data_response = CustomUserSerializer(data=user)

        try:
            user = CustomUser.objects.create_user(**user)
        except IntegrityError:
            return Response({'error': 'User already exists'},status=status.HTTP_400_BAD_REQUEST)

        artist = Artist(**artist)
        artist.user = user
        artist.save()

        artist_data_response = self.serializer_class(data=artist)

        return Response({'message': 'User and artist created successfully'},
                        status=status.HTTP_201_CREATED)
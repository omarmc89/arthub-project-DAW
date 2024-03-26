from django.db import IntegrityError
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .serializers import *
from .models import CustomUser, Artwork, Artist
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]

    def create(self, request, *args, **kwargs):
        data = request.data.copy()

        password = data.pop('password')[0]
        print(type(password))

        print(password)
        data['password'] = make_password(password)

        serializer = self.get_serializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArtworkViewSet(viewsets.ModelViewSet):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer


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


class PaintingViewSet(viewsets.ModelViewSet):
    queryset = Painting.objects.all()
    serializer_class = PaintingSerializer


class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer



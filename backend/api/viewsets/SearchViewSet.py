from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.exceptions import NotFound
from django.db.models import Q

from api.models import CustomUser, Artist, Client, Artwork
from api.serializers.ArtworkSerializer import ArtworkSerializer
from api.serializers.CustomUserSerializer import CustomUserSerializer
from api.serializers.ArtistSerializer import ArtistSerializer
from api.serializers.ClientSerializer import ClientSerializer


class SearchUserViewSet(generics.ListAPIView):
    def get(self, request, *args, **kwargs):
        try:
            params = {key: value for key, value in request.query_params.items()}
            user = CustomUser.objects.get(**params)
            user_serialized = CustomUserSerializer(user)
            return Response(user_serialized.data, status=status.HTTP_200_OK)
        except CustomUser.DoesNotExist:
            raise NotFound('User not found')


class SearchArtistViewSet(generics.ListAPIView):
    def get(self, request, *args, **kwargs):
        try:
            params = {key: value for key, value in request.query_params.items()}
            artist = Artist.objects.get(**params)
            artist_serialized = ArtistSerializer(artist)
            return Response(artist_serialized.data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            raise NotFound('Artist not found')


class SearchClientViewSet(generics.ListAPIView):
    def get(self, request, *args, **kwargs):
        try:
            params = {key: value for key, value in request.query_params.items()}
            client = Client.objects.get(**params)
            client_serialized = ClientSerializer(client)
            return Response(client_serialized.data, status=status.HTTP_200_OK)
        except Client.DoesNotExist:
            raise NotFound('Client not found')

class searchArtworkByInput(generics.ListAPIView):
    def get(self, request, *args, **kwargs):
        params = request.query_params.get('input')
        if params is not None:
            artworks = Artwork.objects.filter(Q(title__icontains=params) | Q(description__icontains=params) | Q(artist__nickname__icontains=params))
            print(artworks.count())
        else:
            artworks = Artwork.objects.all()
            print(artworks.count())
        artworks_serialized = ArtworkSerializer(artworks, many=True)
        return Response(artworks_serialized.data, status=status.HTTP_200_OK)
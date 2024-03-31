from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.exceptions import NotFound

from api.models import Artwork, Artist, Painting, Photo
from api.serializers.ArtworkSerializer import ArtworkSerializer
from api.serializers.PaintingSerializer import PaintingSerializer
from api.serializers.PhotoSerializer import PhotoSerializer


class CreateArtworkViewSet(generics.CreateAPIView):

    def post(self, request, *args, **kwargs):
        data = request.data
        print(data)
        type = data['fetchData'].pop('type')
        artistId = data['fetchData'].pop('artistId')
        artist = Artist.objects.get(id=artistId)
        print(artist)
        artwork_data = data['fetchData']
        artwork = {
            'title': artwork_data['title'],
            'description': artwork_data['description'],
            'image_url': artwork_data['image_url'],
            'price': artwork_data['price'],
            'artist': artist
        }

        try:
            artwork_to_create = Artwork(**artwork)
            artwork_created = Artwork.objects.create(**artwork)

            if type == 'painting':
                painting_data = {
                    'style': artwork_data['style'],
                    'width': artwork_data['width'],
                    'height': artwork_data['height'],
                    'artwork': artwork_created,
                }
                painting_to_create = Painting(**painting_data)
                painting_to_create.save()
                return Response({'painting': PaintingSerializer(painting_to_create).data,
                                 'artwork': ArtworkSerializer(artwork_created).data},
                                status=status.HTTP_201_CREATED)

            if type == 'photo':
                photo_data = {
                    'style': artwork_data['style'],
                    'artwork': artwork_created,
                }
                photo_to_create = Photo(**photo_data)
                photo_to_create.save()
                return Response({'photo': PhotoSerializer(photo_to_create).data,
                                 'artwork': ArtworkSerializer(artwork_created).data},
                                status=status.HTTP_201_CREATED)

        except Exception:
            return Response('Failed to create artwork', status=status.HTTP_400_BAD_REQUEST)

        return Response(data, status=status.HTTP_201_CREATED)

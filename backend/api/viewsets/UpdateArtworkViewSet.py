from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.exceptions import NotFound

from api.models import Artwork, Artist, Painting, Photo
from api.serializers.ArtworkSerializer import ArtworkSerializer
from api.serializers.PaintingSerializer import PaintingSerializer
from api.serializers.PhotoSerializer import PhotoSerializer


class UpdateArtworkViewSet(generics.CreateAPIView):

    def put(self, request, *args, **kwargs):
        data = request.data
        print(data)
        type = data['fetchData'].pop('type')
        artwork_data = data['fetchData']
        artworkId = data['fetchData'].pop('artworkId')

        artwork = Artwork.objects.get(id=artworkId)

        try:
            artwork.title = artwork_data['title']
            artwork.description = artwork_data['description']
            artwork.image_url = artwork_data['image_url']
            artwork.price = artwork_data['price']
            artwork.save()

            if type == 'photo':
                photo = Photo.objects.filter(artwork_id=artworkId).first()
                photo.style = artwork_data['style']
                photo.save()

                return Response({'photo': PhotoSerializer(photo).data,
                                 'artwork': ArtworkSerializer(artwork).data},
                                status=status.HTTP_201_CREATED)

            if type == 'painting':
                painting = Painting.objects.filter(artwork_id=artworkId).first()
                painting.style = artwork_data['style']
                painting.width = artwork_data['width']
                painting.height = artwork_data['height']
                painting.save()

                return Response({'painting': PaintingSerializer(painting).data,
                                 'artwork': ArtworkSerializer(artwork).data},
                                status=status.HTTP_201_CREATED)
        except Exception:
            return Response('Failed to update artwork', status=status.HTTP_400_BAD_REQUEST)

        return Response(data, status=status.HTTP_201_CREATED)

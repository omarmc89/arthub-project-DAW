from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.exceptions import NotFound

from api.models import Artwork, Photo, Painting
from api.serializers.ArtworkSerializer import ArtworkSerializer
from api.serializers.PaintingSerializer import PaintingSerializer
from api.serializers.PhotoSerializer import PhotoSerializer


class ShowArtworkDetailsViewSet(generics.ListAPIView):
    def get(self, request, *args, **kwargs):
        try:
            params = {key: value for key, value in request.query_params.items()}
            artwork_id = params.get('id')
            artwork = Artwork.objects.get(id=artwork_id)
            artwork_details = ArtworkSerializer(artwork)

            painting = Painting.objects.filter(artwork_id=artwork_id).first()
            photo = Photo.objects.filter(artwork_id=artwork_id).first()

            if painting is not None:
                painting_details = PaintingSerializer(painting)
                return Response({"artwork": artwork_details.data, "painting": painting_details.data}, status=status.HTTP_200_OK)
            if photo is not None:
                photo_details = PhotoSerializer(photo)
                return Response({"artwork": artwork_details.data, "photo": photo_details.data}, status=status.HTTP_200_OK)
        except Artwork.DoesNotExist:
            raise NotFound('Artwork not found')
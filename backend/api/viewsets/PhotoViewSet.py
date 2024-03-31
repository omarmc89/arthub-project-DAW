from rest_framework import viewsets

from api.serializers.PhotoSerializer import PhotoSerializer
from api.models import Photo


class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
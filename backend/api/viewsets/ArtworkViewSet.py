from rest_framework import viewsets

from api.serializers.ArtworkSerializer import ArtworkSerializer
from api.models import Artwork


class ArtworkViewSet(viewsets.ModelViewSet):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer
    
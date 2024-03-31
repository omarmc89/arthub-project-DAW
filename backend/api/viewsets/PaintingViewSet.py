from rest_framework import viewsets

from api.serializers.PaintingSerializer import PaintingSerializer
from api.models import Painting


class PaintingViewSet(viewsets.ModelViewSet):
    queryset = Painting.objects.all()
    serializer_class = PaintingSerializer
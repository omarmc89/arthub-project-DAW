import random

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import viewsets, status

from api.serializers.ArtworkSerializer import ArtworkSerializer
from api.models import Artwork


class ArtworkViewSet(viewsets.ModelViewSet):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer

    def getRandomArtworks(self, request):
        random_positions = []
        artworks = []
        all_artworks = Artwork.objects.all()
        end = all_artworks.count()
        while len(random_positions) < 8:
            random_number = self.get_random(end)
            if random_number not in random_positions:
                random_positions.append(random_number)

        for random_position in random_positions:
            artworks.append(all_artworks[random_position])

        serializer = ArtworkSerializer(artworks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def get_random(self, end):
        return random.randint(0, end - 1)
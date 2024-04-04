from rest_framework import viewsets, generics, status
from api.models import Artwork
from api.serializers.ArtworkSerializer import ArtworkSerializer
from rest_framework.response import Response


class ArtworksByUserViewSet(generics.ListAPIView):
    def get(self, request, *args, **kwargs):
        artist_id = request.query_params.get('id')
        artworks_by_user = Artwork.objects.filter(artist_id=artist_id)
        list_artworks = ArtworkSerializer(data=artworks_by_user, many=True)
        list_artworks.is_valid()
        print(artworks_by_user, list_artworks)

        return Response(list_artworks.data, status=status.HTTP_200_OK )

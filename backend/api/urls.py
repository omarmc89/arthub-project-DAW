import dj_rest_auth
from dj_rest_auth import urls
from django.urls import path, include
from rest_framework import routers

from .viewsets.CreateArtworkViewSet import CreateArtworkViewSet
from .viewsets.CustomUserViewSet import CustomUserViewSet
from .viewsets.ArtistViewSet import ArtistViewSet
from .viewsets.ArtworkViewSet import ArtworkViewSet
from .viewsets.PhotoViewSet import PhotoViewSet
from .viewsets.PaintingViewSet import PaintingViewSet
from .viewsets.SearchViewSet import SearchUserViewSet, SearchArtistViewSet

router = routers.DefaultRouter()
router.register(r'users', CustomUserViewSet, basename="users")
router.register(r'artworks', ArtworkViewSet, basename="artworks")
router.register(r'artists', ArtistViewSet, basename="artists")
router.register(r'paintings', PaintingViewSet, basename="paintings")
router.register(r'photos', PhotoViewSet, basename="photos")


urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include(dj_rest_auth.urls)),
    path('search/user/', SearchUserViewSet.as_view(), name='search-user'),
    path('search/artist/', SearchArtistViewSet.as_view(), name='search-artist'),
    path('create/artwork/', CreateArtworkViewSet.as_view(), name='create-artwork')
]
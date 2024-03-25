import dj_rest_auth
from dj_rest_auth import urls
from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'users', CustomUserViewSet, basename="users")
router.register(r'artworks', ArtworkViewSet, basename="artworks")
router.register(r'artists', ArtistViewSet, basename="artists")
router.register(r'paintings', PaintingViewSet, basename="paintings")
router.register(r'photos', PhotoViewSet, basename="photos")


urlpatterns = [
    # path('v1/user', views.UserViewSet),
    # path('v1/artwork', views.ArtworkViewSet),
    # path('v1/artworks/', views.ArtworksApiOverview, name='artworks'),
    # path('v1/users/', views.UsersApiOverview, name='users'),
    # path('v1/artworks/create/', views.add_artwork, name='add-artworks'),
    # path('v1/users/create/', views.add_user, name='add-users'),
    # path('v1/artists/create/', views.add_artist, name='add-artist'),
    path('', include(router.urls)),
    path('auth/', include(dj_rest_auth.urls)),
    # path('login/', LoginView.as_view(), name='auth_login'),
    # path('logout/', LogoutView.as_view(), name='auth_logout')
]

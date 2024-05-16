import dj_rest_auth
from dj_rest_auth import urls
from django.urls import path, include
from rest_framework import routers

from .viewsets.CreateArtworkViewSet import CreateArtworkViewSet
from .viewsets.UpdateArtworkViewSet import UpdateArtworkViewSet

from .viewsets.CustomUserViewSet import CustomUserViewSet
from .viewsets.ArtistViewSet import ArtistViewSet
from .viewsets.ArtworkViewSet import ArtworkViewSet
from .viewsets.PhotoViewSet import PhotoViewSet
from .viewsets.PaintingViewSet import PaintingViewSet
from .viewsets.SearchViewSet import SearchUserViewSet, SearchArtistViewSet, SearchClientViewSet, searchArtworkByInput
from .viewsets.ArtworksByUserViewSet import ArtworksByUserViewSet
from .viewsets.ShowArtworkDetaislViewSet import ShowArtworkDetailsViewSet
from .viewsets.ClientViewSet import ClientViewSet
from .viewsets.AddressViewSet import AddressViewSet
from .viewsets.OrderViewSet import OrderViewSet
from .viewsets.OrderLineViewSet import OrderLineViewSet
from .viewsets.CheckoutViewSet import CreateOrderLineViewSet, CheckoutSessionViewSet


router = routers.DefaultRouter()
router.register(r'users', CustomUserViewSet, basename="users")
router.register(r'artworks', ArtworkViewSet, basename="artworks")
router.register(r'artists', ArtistViewSet, basename="artists")
router.register(r'paintings', PaintingViewSet, basename="paintings")
router.register(r'photos', PhotoViewSet, basename="photos")
router.register(r'clients', ClientViewSet, basename="clients")
router.register(r'orders', OrderViewSet, basename="orders")
router.register(r'order-lines', OrderLineViewSet, basename="order-lines")
router.register(r'addresses', AddressViewSet, basename="addresses")


urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include(dj_rest_auth.urls)),
    path('search/user/', SearchUserViewSet.as_view(), name='search-user'),
    path('search/artist/', SearchArtistViewSet.as_view(), name='search-artist'),
    path('search/client/', SearchClientViewSet.as_view(), name='search-client'),
    path('search/userType/', CustomUserViewSet.as_view({'get': 'get_user_type'}), name='user-type'),
    path('search/artworkbyuser/', ArtworksByUserViewSet.as_view(), name='create-artwork'),
    path('search/artworkskbyfilter/', searchArtworkByInput.as_view(), name='filter-artworks'),
    path('create/artwork/', CreateArtworkViewSet.as_view(), name='user-artworks'),
    path('update/artwork/', UpdateArtworkViewSet.as_view(), name='update-artwork'),
    path('artworkDetails/', ShowArtworkDetailsViewSet.as_view(), name='artworkDetails'),
    path('randomArtworks/', ArtworkViewSet.as_view({'get': 'getRandomArtworks'}), name='random-artworks'),
    path('clientOrders/', OrderViewSet.as_view({'get': 'list_orders'}), name='list-client-orders'),
    path('orderLinesByOrder/', OrderLineViewSet.as_view({'get': 'get_by_order'}), name='order-lines-order'),
    path('createOrderAndOrderLines/', CreateOrderLineViewSet.as_view({'post': 'create_order_and_order_line'}), name='create-order-order-lines'),
    path('stripeCheckout/', CheckoutSessionViewSet.as_view({'post': 'checkout_session'}),
         name='stripe-checkout'),

]

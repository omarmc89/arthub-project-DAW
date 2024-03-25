
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .serializers import *
from .models import CustomUser, Artwork, Artist
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def create(self, request, *args, **kwargs):
        data = request.data.copy()

        print("Método HTTP:", request.method)
        print("URL:", request.path)
        print("Datos de la solicitud:", request.data)
        print("Argumentos GET:", request.GET)
        print("Argumentos POST:", request.POST)
        print("Argumentos de la URL:", kwargs)
        print("Argumentos:", args)
        print("Kwargs:", kwargs)

        password = data.pop('password')[0]
        print(type(password))

        print(password)
        data['password'] = make_password(password)

        serializer = self.get_serializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArtworkViewSet(viewsets.ModelViewSet):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer


class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer


class PaintingViewSet(viewsets.ModelViewSet):
    queryset = Painting.objects.all()
    serializer_class = PaintingSerializer


class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer


#
#     def post(self, request):
#         email = request.data.get('email', None)
#         password = request.data.get('password', None)
#         user = authenticate(email=email, password=password)
#
#         if user:
#             login(request, user)
#             token, created = Token.objects.get_or_create(user=user)
#             token.save()
#             response_data = {
#                 'token': token.key,
#                 'user': CustomUserSerializer(user).data
#             }
#             response = Response(response_data, status=status.HTTP_200_OK)
#             response.set_cookie('auth_token', token.key)
#             return response
#
#             # Si no es correcto devolvemos un error en la petición
#         return Response(
#             status=status.HTTP_404_NOT_FOUND)
#
#
# class LogoutView(APIView):
#     def post(self, request):
#         logout(request)
#         return Response(
#             status=status.HTTP_200_OK
#         )



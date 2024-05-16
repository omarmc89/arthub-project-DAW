from rest_framework import viewsets
from api.models import CustomUser
from api.serializers.CustomUserSerializer import CustomUserSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.exceptions import NotFound
from django.contrib.auth.hashers import make_password


class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]

    def create(self, request, *args, **kwargs):
        data = request.data.copy()

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

    def get_user_type(self, request, *args, **kwargs):
        user_id  = request.query_params.get('user_id')
        user = CustomUser.objects.get(id=user_id)
        if user.artists.first():
            return Response(data='artist', status=status.HTTP_200_OK)

        if user.client:
            return Response(data='client', status=status.HTTP_200_OK)

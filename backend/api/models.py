from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    avatar = models.CharField(blank=True, max_length=200)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']


class Role(models.Model):
    name = models.CharField(max_length=100)


class Artist(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    nickname = models.CharField(max_length=100)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='artists')


class Artwork(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    title = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.CharField(max_length=200)
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='artworks')


class Painting(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    style = models.CharField(max_length=100)
    width = models.IntegerField()
    height = models.IntegerField()
    artwork = models.ForeignKey(Artwork, on_delete=models.CASCADE, related_name="paintings")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Photo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    style = models.CharField(max_length=100)
    artwork = models.ForeignKey(Artwork, on_delete=models.CASCADE, related_name='photos')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)




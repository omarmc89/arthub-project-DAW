from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    avatar = models.TextField(blank=True)

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
    image_url = models.TextField()
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


class Client(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    birth_date = models.DateField()
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Address(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    postal_code = models.IntegerField()
    country = models.CharField(max_length=100)
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='addresses')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, related_name='orders')
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='orders')
    total = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class OrderLine(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    artwork = models.ForeignKey(Artwork, on_delete=models.CASCADE, related_name='order_line_artwork')


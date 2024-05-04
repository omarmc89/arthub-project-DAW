from rest_framework import status
from django.test import TestCase
from urllib.parse import urlencode
from rest_framework.test import APIRequestFactory
from rest_framework.test import APIClient
from uuid import UUID

from api.models import *
# from django.test.utils import ignore_warnings
# ignore_warnings(message="No directory at", module="whitenoise.base").enable()

class TestsAPI(TestCase):

    fixtures = [
        'artist.json',
        'artwork.json',
        'painting.json',
        'photo.json',
        'user.json'
    ]

    def setUp(self):
        self.factory = APIRequestFactory()
        self.client = APIClient()

    def test_api_random_artworks(self):
        request = self.factory.get('/api/v1/randomArtworks/')
        response = self.client.get('/api/v1/randomArtworks/')

        data = response.data
        artwork_ids = [item.get('id') for item in data]
        set_ids = set(artwork_ids)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 8)
        self.assertEqual(len(set_ids), len(artwork_ids))

    def test_api_login_ok(self):
        data = {'username': 'user1@gmail.com', 'password': 'test'}
        response = self.client.post('/api/v1/auth/login/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('key',response.data)

    def test_api_login_fail(self):
        data = {'username': 'user1@gmail.com', 'password': 'testerror'}
        response = self.client.post('/api/v1/auth/login/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_api_artworks_by_user(self):
        params = {'id': '00000000-0000-0000-0000-000000000003'}
        base_url = '/api/v1/search/artworkbyuser/?'
        query = urlencode(params)
        url = base_url + query
        response = self.client.get(url)
        artwork_user_ids = [item.get('artist').get('user_id').hex for item in response.data]
        set_ids = set(artwork_user_ids)
        self.assertEqual(len(set_ids), 1)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(set_ids, {params.get('id').replace('-', '')})

    def test_api_create_artwork_photo(self):
        data = {
            'fetchData': {
                'title': 'test',
                'description': 'test',
                'image_url': 'test',
                'price': 0,
                'artistId': '00000000-0000-0000-0000-000000000002',
                'type': 'photo',
                'style': 'landscape'
            }
        }

        base_url = '/api/v1/create/artwork/'
        response = self.client.post(base_url, data, format='json')
        artwork_created = Artwork.objects.get(title='test')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIsInstance(artwork_created, Artwork)

    def test_api_create_artist(self):
        data = {
            'username': 'test',
            'first_name': 'test',
            'last_name': 'test',
            'email': 'test',
            'password': 'test',
            'avatar': 'test',
            'nickname': 'test'
        }
        response = self.client.post('/api/v1/artists/', data, format='json')

        user_created = CustomUser.objects.get(username='test')
        artist_created = Artist.objects.get(nickname='test')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIsInstance(artist_created, Artist)
        self.assertIsInstance(user_created, CustomUser)



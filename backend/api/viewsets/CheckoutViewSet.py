from api.models import Order, OrderLine, Artwork, Client, Address
from api.serializers.OrderSerializer import OrderSerializer
from api.serializers.OrderLineSerializer import OrderLineSerializer
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.exceptions import ValidationError
import stripe
import os



from api.viewsets.OrderLineViewSet import OrderLineViewSet
from api.viewsets.OrderViewSet import OrderViewSet

YOUR_DOMAIN_TEST = 'http://localhost:3000/checkout/'
YOUR_DOMAIN = 'https://arthub.fly.dev'


class CreateOrderLineViewSet(viewsets.ModelViewSet):

    def create_order_and_order_line(self, request, *args, **kwargs):
        order_lines_counter = 0
        artworks_ordered = request.data.get("artworks")
        client_id = request.data.get('client_id')
        address_id = request.data.get('address_id')
        total = request.data.get('total')
        order_data = {
            "address_id": address_id,
            "total": total,
            "client_id": client_id,
        }
        address = Address.objects.get(id=address_id)
        client = Client.objects.get(id=client_id)
        order_serializer = OrderSerializer(data=order_data)
        if order_serializer.is_valid(raise_exception=True):
            order = Order.objects.create(**order_data)
        else:
            raise ValidationError(order_serializer.errors)
        for artwork in artworks_ordered:
            artwork_id = artwork.get('id')
            artwork = Artwork.objects.get(id=artwork_id)
            order_line_data = {
                "artwork_id": artwork_id,
                "order": order.id
            }
            order_line_serializer = OrderLineSerializer(data=order_line_data)
            if order_line_serializer.is_valid(raise_exception=True):
                order_line_data.update({"order": order})
                OrderLine.objects.create(**order_line_data)
                order_lines_counter += 1
            else:
                raise ValidationError(order_serializer.errors)
        return Response(
            {'message':'Order created with {} order lines.'.format(order_lines_counter)},
            status=status.HTTP_201_CREATED
        )


stripe.api_key = os.getenv('STRIPE_SECRET_KEY')


class CheckoutSessionViewSet(viewsets.ModelViewSet):

    def checkout_session(self, request, *args, **kwargs):
        customer_email = request.data.get('email')
        total_price = request.data.get('total')
        artworks = request.data.get('artworks')
        artwork_ids = [item.get('id') for item in artworks]
        artwork_images = [item.get('image') for item in artworks]
        orders_counter = Order.objects.all().count()

        try:
            checkout_session = stripe.checkout.Session.create(
                customer_email=customer_email,
                line_items=[
                    {
                        # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        'quantity': len(artwork_ids),
                        'price_data': {
                            'currency': 'EUR',
                            'product_data': {
                                'name': 'Artworks' + str(orders_counter),
                                'images': artwork_images,
                            },
                            'unit_amount': total_price
                        },
                    },
                ],
                mode='payment',
                # success_url=YOUR_DOMAIN + 'success',
                success_url='https://www.stripe.com',
                cancel_url=YOUR_DOMAIN + 'canceled',
            )
        except Exception as e:
            return str(e)

        return Response(checkout_session.url, status.HTTP_303_SEE_OTHER)


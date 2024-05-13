from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from api.serializers.OrderLineSerializer import OrderLineSerializer
from api.models import OrderLine, Artwork, Order
from api.serializers.OrderSerializer import OrderSerializer


class OrderLineViewSet(viewsets.ModelViewSet):
    queryset = OrderLine.objects.all()
    serializer_class = OrderLineSerializer

    def create(self, request, *args, **kwargs):
        order_id = request.data.pop('order_id')
        artworks = request.data.pop('artworks')
        order = Order.objects.get(id=order_id)
        order_lines = []
        try:
            for artwork_id in artworks:
                artwork = Artwork.objects.get(id=artwork_id)
                order_line = OrderLine.objects.create(order=order, artwork=artwork)
                order_lines.append(order_line)
        except Exception as e:
            return Response(e, status=status.HTTP_400_BAD_REQUEST)

        return Response(order_lines, status=status.HTTP_201_CREATED)

    def get_by_order(self, request, *args, **kwargs):
        params = request.query_params.get('order_id')
        order_lines = OrderLine.objects.filter(order_id=params)
        order_lines_serializer = OrderLineSerializer(order_lines, many=True)
        return Response(order_lines_serializer.data, status.HTTP_200_OK)
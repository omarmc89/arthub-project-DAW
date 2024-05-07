# Generated by Django 4.2.11 on 2024-05-06 17:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_address_order_orderline_client_address_client'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='user',
        ),
        migrations.AddField(
            model_name='order',
            name='client',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='api.client'),
            preserve_default=False,
        ),
    ]

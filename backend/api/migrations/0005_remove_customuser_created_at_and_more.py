# Generated by Django 5.0.3 on 2024-03-12 13:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_customuser_updated_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='updated_at',
        ),
    ]

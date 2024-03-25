
from django.contrib import admin
from .models import CustomUser
# Register your models here.
@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    # Aquí puedes definir cómo se mostrarán los campos del modelo en el administrador de Django
    list_display = ['username', 'email', 'first_name', 'last_name', 'is_active', 'date_joined']
    search_fields = ['username', 'email', 'first_name', 'last_name']
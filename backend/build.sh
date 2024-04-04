#!/bin/bash

# Instalar las dependencias de Python
pip install -r requirements.txt

# Ejecutar las migraciones de Django
python manage.py migrate --noinput

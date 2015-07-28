from django.db import models

# Create your models here.
class Persona(models.Model):
    cedula = models.CharField(max_length=10)
    nombres= models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)

class Vehiculo(models.Model):
    placa = models.CharField(max_length=7)
    marca = models.CharField(max_length=20)
    propietario = models.ForeignKey(Persona,related_name='autos')

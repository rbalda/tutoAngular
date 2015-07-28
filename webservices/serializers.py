from rest_framework.serializers import ModelSerializer
from webservices.models import Persona, Vehiculo

__author__ = 'rbalda'

class AutoSerializer(ModelSerializer):
    class Meta:
        model = Vehiculo
        fields = ('placa','marca','propietario')

class PersonaSerializer(ModelSerializer):
    autos = AutoSerializer(many=True,read_only=True)
    class Meta:
        model = Persona
        fields = ('cedula','nombres','apellidos','autos')
        read_only_fields = ('id')




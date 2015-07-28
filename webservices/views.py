from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet
from webservices.models import Persona, Vehiculo
from webservices.serializers import PersonaSerializer, AutoSerializer


class PersonaViewSet(ModelViewSet):
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer


class VehiculoViewSet(ModelViewSet):
    queryset = Vehiculo.objects.all()
    serializer_class = AutoSerializer


def home(request):
    return render(request,'base.html')

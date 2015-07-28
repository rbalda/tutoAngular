from webservices.views import PersonaViewSet, VehiculoViewSet

__author__ = 'rbalda'
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'api/personas',PersonaViewSet)
router.register(r'api/vehiculo',VehiculoViewSet)

urlpatterns = router.urls
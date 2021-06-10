from django.urls import path, include
from .views import DataLoader
from rest_framework.routers import  DefaultRouter


router = DefaultRouter()
router.register('posts', DataLoader)


urlpatterns = [
  path('', include(router.urls)),
]





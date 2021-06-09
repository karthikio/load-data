from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import RandomData
from .serializers import DataSerializer


class DataLoader(ModelViewSet):
  queryset = RandomData()
  serializer_class = DataSerializer

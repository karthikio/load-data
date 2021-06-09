from rest_framework import fields, serializers
from rest_framework.serializers import ModelSerializer
from .models import RandomData

class DataSerializer(ModelSerializer):
  class Meta:
    model = RandomData
    fields = '__all__'
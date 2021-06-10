from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer


class DataLoader(viewsets.ModelViewSet):
  queryset = Post.objects.all()
  serializer_class = PostSerializer

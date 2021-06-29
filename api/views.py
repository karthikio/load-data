from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets, filters
from .models import Post
from .serializers import PostSerializer
from rest_framework.pagination import PageNumberPagination


class DataLoader(viewsets.ModelViewSet):
  queryset = Post.objects.all()
  serializer_class = PostSerializer
  filter_backends = (filters.SearchFilter,)
  search_fields = ('title', 'info',)
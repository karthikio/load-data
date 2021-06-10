from django.db import models


class Post(models.Model):
  title = models.CharField(max_length=80)
  info = models.TextField(max_length=255)

  def __str__(self):
    return self.title
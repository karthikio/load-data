from django.db import models


class RandomData(models.Model):
  title = models.CharField(max_length=80)
  content = models.TextField(max_length=255)

  def __str__(self):
    return self.title
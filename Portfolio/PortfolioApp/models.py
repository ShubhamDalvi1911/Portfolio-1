from django.db import models
from django.shortcuts import render


# Create your models here.

class Msg(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
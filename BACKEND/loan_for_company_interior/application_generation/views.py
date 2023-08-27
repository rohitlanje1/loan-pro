from django.shortcuts import render
from .serializers import ApplicationSerializer
from .models import Application
from rest_framework import viewsets

class ApplicationView(viewsets.ModelViewSet):
    serializer_class = ApplicationSerializer
    queryset = Application.objects.all()

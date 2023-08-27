from django.shortcuts import render
from .serializers import EnquirySerializer
from .models import Enquiry
from rest_framework import viewsets

class EnquiryView(viewsets.ModelViewSet):
    serializer_class = EnquirySerializer
    queryset = Enquiry.objects.all()
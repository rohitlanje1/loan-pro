from django.db import models
from customer.models import Enquiry
from rest_framework import serializers


class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = '__all__'
        
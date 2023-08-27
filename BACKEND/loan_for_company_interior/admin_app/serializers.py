from rest_framework import serializers
from .models import User,Defaulter
from django.core.exceptions import ValidationError
# from .validator import file_extention,file_size
    
class UserSerializer(serializers.ModelSerializer):
    # photo = serializers.ImageField(validators=[file_extention,file_size])
    # signature = serializers.ImageField(validators=[file_extention,file_size])
    def photoSize(self,image):
        maxsize = 1024
        if image.size > 1024:
            raise serializers.ValidationError('File Must Less Than 1 MB')
        return image

    class Meta:
        model = User
        fields = ['id','first_name','last_name','dob','gender','email','address','city','state','country','pin_code',
                    'mobile','photo','signature','role','password','username'
                    ]

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class DefaulterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Defaulter
        fields = '__all__'

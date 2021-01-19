from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model

Userr = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    
    class Meta(UserCreateSerializer.Meta):
        fields = '__all__'
        model = Userr
        
        


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'email', 'name', 'phone_number', 'state', 'is_staff', 
                  'is_superuser', 'last_login', 'date_joined', )
        model = User
from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import User
from .serializers import UserSerializer
from rest_framework.response import Response

# Create your views here.

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        users = self.queryset.filter(is_superuser = False)
        return users
      
    # def list(self, request):
    #         # Note the use of `get_queryset()` instead of `self.queryset`
    #     queryset = self.get_queryset()
    #     print(queryset)
    #     serializer = UserSerializer(queryset, many=True)
    #     return Response(serializer.data)
    
class GetUser(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self, *args, **kwargs):
        user = self.queryset.filter(id = self.request.user.id)
        return user
    
    
class GetAUser(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'
    
from django.urls import path
from .views import UserList, GetUser, GetAUser

urlpatterns = [
    path('users', UserList.as_view(), name='userlist'),
    path('users/user/', GetUser.as_view(), name='userdetail'),
    path('users/<int:id>/', GetAUser.as_view(), name='userdetail'),
]
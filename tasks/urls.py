from django.urls import path
from .views import list,create,delete

urlpatterns=[
    path('', list),
    path('new/', create, name='create'),
    path('delete/<int:tareaId>/', delete, name='delete')
]
from django.urls import path
from mainPage import views

urlpatterns = [
    path('', views.plugins),
    path('plugins', views.plugins),
    path('settings', views.settings),
    path('docs', views.docs)
]
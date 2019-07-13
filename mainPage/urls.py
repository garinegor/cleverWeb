from django.urls import path
from mainPage import views

urlpatterns = [
    path('', views.plugins),
    path('plugins', views.plugins),
    path('settings', views.settings),
    path('docs', views.docs),
    path('wifi/available', views.get_wifi_list),
    path('wifi/config', views.config_wifi),
    path('wifi', views.wifi),
    path('launch/cam_config', views.config_camera)
]
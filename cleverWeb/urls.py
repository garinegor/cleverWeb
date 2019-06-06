import os
from django.conf.urls import url, include, re_path
from django.contrib import admin
from json import loads

PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))
path_to_plugins = os.path.join(PROJECT_ROOT, '../cleverWeb/plugins_urls.json')
plugins_paths = loads(open(path_to_plugins).read())["paths"]

urlpatterns = [
    url(r'^admin/', admin.site.urls),
]

for i in plugins_paths:
    urlpatterns.append(re_path(i["name"], include(i["url"])))

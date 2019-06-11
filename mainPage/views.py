import os
from json import loads

from django.shortcuts import render
from django.http import JsonResponse

PATH_TO_LAUNCH = "path_to_launch"
PATH_TO_FOLDER = "./map"
PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))


def plugins(request):
    data = dict()
    with open(os.path.join(PROJECT_ROOT, 'apps.json')) as f:
        available_plugins = loads(f.read())
    data["content"] = [
        {
            "title": "Favorite",
            "row": available_plugins
        },
        {
            "title": "Favorite x10",
            "row": available_plugins * 10
        }
    ]

    data["navbar_color"] = "#343a40"
    data["navbar_title"] = "plugins"
    data["profile_name"] = "Eegorek"
    return render(request, "cleverWeb/plugins.html", data)


def settings(request):
    data = dict()
    data["wifi"] = {
        "current": "COEX Tower",
        "pass": "somewifipassword",
        "own_name": "CLEVERWEB",
        "own_pass": "cleverwifi"
    }
    data["camera"] = {
        "shiftx": 0.5,
        "shifty": 0.4,
        "shiftz": 0.3,
        "angleYaw": 3.1415,
        "anglePitch": 2.1415,
        "angleRoll": 1.1415,
    }
    data["aruco"] = {
        "maps": ["map.txt", "office.txt", "kek.txt"]
    }
    data["navbar_color"] = "#343a40"
    data["navbar_title"] = "settings"
    data["profile_name"] = "Eegorek"
    return render(request, "cleverWeb/settings.html", data)


def docs(request):
    data = dict()
    data["navbar_color"] = "#343a40"
    data["navbar_title"] = "documentation"
    data["profile_name"] = "Eegorek"
    return render(request, "cleverWeb/documentation.html", data)


def get_wifi_list(request):
    data = dict()
    data["available"] = ["COEX Tower", "kek1", "kek2", "kek3"]  # первый эдемент - сеть к которой подключен
    return JsonResponse(data)


def config_wifi(request):  # конфигурация сети самого клевера
    net_name = request.GET.get("ssid")
    net_password = request.GET.get("password")
    return JsonResponse({"status": "ok"})


def connect_wifi(request):  # конфигурация сети к которой он подключится
    net_name = request.GET.get("ssid")
    net_password = request.GET.get("password")
    return JsonResponse({"status": "ok"})


def config_camera(request):
    config_string = request.GET.get("x") + " " + request.GET.get("y") + " " + request.GET.get(
        "z") + " " + request.GET.get("yaw") + " " + request.GET.get("pitch") + " " + request.GET.get("roll")
    #smth like "0.5 0.4 0.3 3.1415 2.1415 1.1415"
    return JsonResponse({"status": "ok"})

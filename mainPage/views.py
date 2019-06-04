import re
import os
from json import loads

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt

PATH_TO_LAUNCH = "path_to_launch"
PATH_TO_FOLDER = "./map"
PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))


def home(request):
    files = [i for i in os.listdir(PATH_TO_FOLDER) if i.split(".")[1] == "txt"]
    return render(request, "aruco/index.html", {"files": files})


def main(request):
    data = dict()
    with open(os.path.join(PROJECT_ROOT, 'apps.json')) as f:
        available_plugins = loads(f.read())
    data["content"] = [
        {
            "title": "Favorite",
            "row": available_plugins
        },
        {
            "title": "Favorite X3",
            "row": available_plugins * 2
        }
    ]

    return render(request, "main.html", data)


@csrf_exempt
def save_map(request):
    if request.method == 'POST':
        data = request.POST
        filename = data["filename"].split(".")[0] + ".txt"
        map_json = loads(data["map"])
        try:
            path_to_file = PATH_TO_FOLDER + "/" + filename
            with open(path_to_file, "w") as f:
                for line in map_json:
                    f.write(line + "\n")
            message = "Saved."
        except:
            return HttpResponseBadRequest()
    else:
        message = "Error."
    return HttpResponse(message)


@csrf_exempt
def validate_filename(request):
    if request.method == 'POST':
        data = request.POST
        is_valid = re.match("^[a-zA-Z0-9]+(.txt)?$", data["filename"])
        filename = data["filename"].split(".")[0] + ".txt"

        if is_valid and filename not in os.listdir(PATH_TO_FOLDER):
            message = "Filename is valid"
        else:
            return HttpResponseBadRequest()

    else:
        message = "Error."

    return HttpResponse(message)


@csrf_exempt
def load_file(request):
    if request.method == 'POST':
        filename = request.POST["filename"]
        try:
            with open(PATH_TO_FOLDER + "/" + filename) as f:
                # lines = f.readlines()
                # return HttpResponse("\n".join(lines))
                return HttpResponse(f.read())
        except:
            return HttpResponseBadRequest()

    else:
        return HttpResponse("Error")


def show_files(request):
    files = [i for i in os.listdir(PATH_TO_FOLDER) if i.split(".")[1] == "txt"]
    return render(request, "aruco/files.html", {"files": files})

# celery_example/tasks.py
from __future__ import absolute_import, unicode_literals
from ExtractPdfWeb.celery import app

from barModule.LectorTextoEnImagenes import main

@app.task
def orc(nombre, proceso):
    return main(nombre, proceso="")


@app.task
def prueba_resta(x, y):
    return x - y
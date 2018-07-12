from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
# set the default Django settings module for the 'celery' program.

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ExtractPdfWeb.settings')

app = Celery('ExtractPdfWeb')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()






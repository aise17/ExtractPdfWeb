from django.db import models

# Create your models here.
class File(models.Model):
    descripcion = models.TextField(max_length=255, blank=True)
    documento = models.FileField(upload_to='./')
    dateTimeUp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.descripcion
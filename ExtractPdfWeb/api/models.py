from django.db import models
import uuid
from django.contrib.auth.models import User





# Create your models here.
class File(models.Model):

    PROCESOS = (
        ('B', 'B'),
        ('T', 'T'),
        ('TB', 'TB'),
    )

    Id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    descripcion = models.TextField(max_length=255, blank=True)
    documento = models.FileField(upload_to='./')
    dateTimeUp = models.DateTimeField(auto_now=True)
    proceso = models.TextField(choices=PROCESOS, blank=True)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.descripcion

class Explicacion(models.Model):
    Id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    titulo =models.CharField(max_length=255,blank=True)
    fecha_creacion = models.DateField(auto_now= True)
    fecha_publicacion = models.DateField(null=True, blank=True)
    publicado = models.BooleanField(default=False)
    contenido = models.TextField(max_length=255, blank=False)

    def __str__(self):
        return self.titulo


class AnuncioSuperior(models.Model):
    Id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    titulo = models.CharField(max_length=255,blank=True)
    fecha_creacion = models.DateField(auto_now= True)
    fecha_publicacion = models.DateField(null=True, blank=True)
    publicado = models.BooleanField(default=False)
    script = models.TextField(max_length=255, blank=False)

    def __str__(self):
        return self.titulo

class AnuncioLateral(models.Model):
    Id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    titulo = models.CharField(max_length=255, blank=True)
    fecha_creacion = models.DateField(auto_now=True)
    fecha_publicacion = models.DateField(null=True, blank=True)
    publicado = models.BooleanField(default=False)
    script = models.TextField(max_length=255, blank=False)

    def __str__(self):
        return self.titulo

class AnuncioInferior(models.Model):
    Id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    titulo = models.CharField(max_length=255,blank=True)
    fecha_creacion = models.DateField(auto_now= True)
    fecha_publicacion = models.DateField(null=True, blank=True)
    publicado = models.BooleanField(default=False)
    script = models.TextField(max_length=255, blank=False)

    def __str__(self):
        return self.titulo

class IpsFiles(models.Model):
    file = models.ForeignKey(File, on_delete= models.CASCADE)
    Id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    fecha_conexion = models.DateField(auto_now= True)
    ip = models.CharField(max_length= 50)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.ip

class Incidencia (models.Model):
    Id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    asunto = models.CharField(max_length= 100)
    contenido = models.TextField()
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    fecha_creacion = models.DateField(auto_now= True)
        
    def __str__(self):
        return self.asunto
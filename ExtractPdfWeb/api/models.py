from django.db import models





# Create your models here.
class File(models.Model):

    PROCESOS = (
        ('B', 'B'),
        ('T', 'T'),
        ('TB', 'TB'),
    )

    descripcion = models.TextField(max_length=255, blank=True)
    documento = models.FileField(upload_to='./')
    dateTimeUp = models.DateTimeField(auto_now=True)
    proceso = models.TextField(choices=PROCESOS, blank=True)

    def __str__(self):
        return self.descripcion


class Explicacion(models.Model):

    titulo =models.CharField(max_length=255,blank=True)
    fecha_creacion = models.DateField(auto_now= True)
    fecha_publicacion = models.DateField(null=True, blank=True)
    publicado = models.BooleanField(default=False)
    contenido = models.TextField(max_length=255, blank=False)

    def __str__(self):
        return self.titulo


class AnuncioSuperior(models.Model):

    titulo = models.CharField(max_length=255,blank=True)
    fecha_creacion = models.DateField(auto_now= True)
    fecha_publicacion = models.DateField(null=True, blank=True)
    publicado = models.BooleanField(default=False)
    script = models.TextField(max_length=255, blank=False)

    def __str__(self):
        return self.titulo

class AnuncioLateral(models.Model):
    titulo = models.CharField(max_length=255, blank=True)
    fecha_creacion = models.DateField(auto_now=True)
    fecha_publicacion = models.DateField(null=True, blank=True)
    publicado = models.BooleanField(default=False)
    script = models.TextField(max_length=255, blank=False)

    def __str__(self):
        return self.titulo

class AnuncioInferior(models.Model):

    titulo = models.CharField(max_length=255,blank=True)
    fecha_creacion = models.DateField(auto_now= True)
    fecha_publicacion = models.DateField(null=True, blank=True)
    publicado = models.BooleanField(default=False)
    script = models.TextField(max_length=255, blank=False)

    def __str__(self):
        return self.titulo

from django.contrib import admin

# Register your models here.
from .models import File, Explicacion, AnuncioInferior, AnuncioLateral, AnuncioSuperior

# Register your models here.

admin.site.register(File)
admin.site.register(Explicacion)
admin.site.register(AnuncioLateral)
admin.site.register(AnuncioSuperior)
admin.site.register(AnuncioInferior)
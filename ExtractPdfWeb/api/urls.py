
from django.conf.urls import url

from .views import FileView, AnuncioInferiorView, AnuncioLateralView, AnuncioSuperiroView, ExplicacionContent


urlpatterns = [
  url(r'^upload/$', FileView.as_view(), name='file-upload'),
  url(r'^explicacion/$', ExplicacionContent.as_view(), name='file-upload'),
  url(r'^anunciosuperior/$', AnuncioSuperiroView.as_view(), name='file-upload'),
  url(r'^anunciolateral/$', AnuncioLateralView.as_view(), name='file-upload'),
  url(r'^anunioinferior/$', AnuncioInferiorView.as_view(), name='file-upload'),
]
from django.shortcuts import render

# Create your views here.

from rest_framework import generics, mixins
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import ArchivoSerializer, ExplicaionSerializer, AnuncioInferiroSerializer, AnuncioLateralSerializer, AnuncioSuperiorSerializer
from .models import File, AnuncioInferior, AnuncioSuperior, AnuncioLateral, Explicacion
from django.http import HttpResponse


import sys
sys.path.append("../orc")

#from barModule.LectorTextoEnImagenes import main

from .tasks import orc


class FileView(generics.ListCreateAPIView):


    queryset = File.objects.all()
    serializer_class = ArchivoSerializer

    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_serializer = ArchivoSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()

            nombre:str = file_serializer.data.get('documento').__str__()
            nombre = nombre.split('/')[-1]

            # TODO leer proceso de los datos de entrada y configurar orc
            text = orc.delay(nombre, proceso="")

            text = text.get()

            file_serializer.data

            salida = {
                "documento" : file_serializer.data,
                "salida" : repr(text),
            }

            filename = nombre + '.txt'
            content = text
            response = HttpResponse(content, content_type='text/plain')
            response['Content-Disposition'] = 'attachment; filename={0}'.format(filename)
            return response

            #return Response(salida, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ExplicacionContent(generics.ListCreateAPIView):

    queryset = Explicacion.objects.all()
    serializer_class = ExplicaionSerializer


class AnuncioSuperiroView(generics.ListCreateAPIView):

    queryset = AnuncioSuperior.objects.all()
    serializer_class = AnuncioSuperiorSerializer


class AnuncioInferiorView(generics.ListCreateAPIView):

    queryset = AnuncioInferior.objects.all()
    serializer_class = AnuncioInferiroSerializer


class AnuncioLateralView(generics.ListCreateAPIView):
    queryset = AnuncioLateral.objects.all()
    serializer_class = AnuncioLateralSerializer


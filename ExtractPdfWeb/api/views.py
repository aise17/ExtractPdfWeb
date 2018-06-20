from django.shortcuts import render

# Create your views here.

from rest_framework import generics, mixins
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import ArchivoSerializer
from .models import File

import sys
sys.path.append("../orc")

from barModule.LectorTextoEnImagenes import main


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
            print('************************************************************************************************')
            print(nombre.split('/')[-1])
            print('************************************************************************************************')

            main(nombre, proceso="")

            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


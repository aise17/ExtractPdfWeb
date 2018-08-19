
from rest_framework import serializers
from .models import File, AnuncioInferior, AnuncioSuperior, AnuncioLateral, Explicacion,IpsFiles, Incidencia


class ArchivoSerializer(serializers.ModelSerializer):

    class Meta:
        model= File
        fields = "__all__"

class ExplicaionSerializer(serializers.ModelSerializer):

    class Meta:
        model= Explicacion
        fields = "__all__"


class AnuncioLateralSerializer(serializers.ModelSerializer):

    class Meta:
        model= AnuncioLateral
        fields = "__all__"


class AnuncioSuperiorSerializer(serializers.ModelSerializer):

    class Meta:
        model= AnuncioSuperior
        fields = "__all__"


class AnuncioInferiroSerializer(serializers.ModelSerializer):

    class Meta:
        model= AnuncioInferior
        fields = "__all__"

class IpsFileSerializers(serializers.ModelSerializer):
    class Meta:
        model= IpsFiles
        fields = "__all__"

class IncidenciaSerializers(serializers.ModelSerializer):
    class Meta:
        model= Incidencia
        fields = "__all__"

# Generated by Django 2.0.6 on 2018-08-12 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20180711_1748'),
    ]

    operations = [
        migrations.CreateModel(
            name='Explicacion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.TextField(blank=True, max_length=255)),
                ('fecha_creacion', models.DateField(auto_now=True)),
                ('fehca_publicacion', models.DateField()),
                ('publicado', models.BooleanField()),
                ('contenido', models.TextField(max_length=255)),
            ],
        ),
        migrations.AddField(
            model_name='file',
            name='proceso',
            field=models.TextField(blank=True, choices=[('Proceso1', 'Blur'), ('Proceso2', 'Tresholding')]),
        ),
    ]
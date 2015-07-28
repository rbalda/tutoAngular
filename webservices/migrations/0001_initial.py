# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('cedula', models.CharField(max_length=10)),
                ('nombres', models.CharField(max_length=50)),
                ('apellidos', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Vehiculo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('placa', models.CharField(max_length=7)),
                ('marca', models.CharField(max_length=20)),
                ('propietario', models.ForeignKey(related_name='autos', to='webservices.Persona')),
            ],
        ),
    ]

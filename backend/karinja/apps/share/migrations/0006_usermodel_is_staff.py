# Generated by Django 3.2 on 2023-05-24 12:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('share', '0005_remove_usermodel_is_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermodel',
            name='is_staff',
            field=models.BooleanField(default=False, verbose_name='Staff'),
        ),
    ]

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

# Create your models here.

class CustomUser(AbstractUser):
    class Meta:
        verbose_name_plural = 'CustomUser'


class Category(models.Model):
    name = models.CharField(max_length=256, help_text='カテゴリー名')
    create_date = models.DateTimeField(auto_now_add=True, help_text='作成日')
    update_date = models.DateTimeField(auto_now=True, help_text='更新日')

    def __str__(self):
        return self.name


class Main(models.Model):
    category = models.ForeignKey(Category, related_name='Mains', on_delete=models.CASCADE, help_text='カテゴリーID')
    thumbnail = models.ImageField(blank=True, null=True)
    summary_text = models.TextField(help_text='サマリーテキスト')
    iframe_code = models.TextField(help_text='iframeコード')
    create_date = models.DateTimeField(auto_now_add=True, help_text='作成日')
    update_date = models.DateTimeField(auto_now=True, help_text='更新日')

    def __str__(self):
        return str(self.id)


from django.shortcuts import render
from django.views import generic


# Create your views here.

# コンテンツ管理画面
class LoginView(generic.TemplateView):
    template_name = "login.html"

class IndexView(generic.TemplateView):
    template_name = "index.html"

class EditView(generic.TemplateView):
    template_name = "edit.html"


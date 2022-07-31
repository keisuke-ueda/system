from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import(LoginView, LogoutView)
from django.views import generic
from .forms import LoginForm


# Create your views here.

# コンテンツ管理画面
class LoginView(LoginView):
    template_name = "login.html"
    form_class = LoginForm

class IndexView(generic.TemplateView):
    template_name = "index.html"

class EditView(generic.TemplateView):
    template_name = "edit.html"

class Logout(LoginRequiredMixin,LogoutView):
    template_name = "login.html"

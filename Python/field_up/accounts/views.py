from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import(LoginView, LogoutView)
from django.views import generic
from django.urls import reverse
from django.urls import reverse_lazy
from .forms import LoginForm
from . import models

# Create your views here.

# コンテンツ管理画面
class LoginView(LoginView):
    template_name = "login.html"
    form_class = LoginForm

class IndexView(LoginRequiredMixin, generic.ListView):
    model = models.Main
    context_object_name = "main_list"
    template_name = "index.html"

class CreateView(LoginRequiredMixin, generic.CreateView):
    model = models.Main
    fields = ("category","thumbnail","summary_text","iframe_code")
    template_name = "form.html"
    success_url = reverse_lazy("accounts:index")

class UpdateView(LoginRequiredMixin, generic.UpdateView):
    fields = ("category","thumbnail","summary_text","iframe_code")
    model = models.Main
    template_name = "form.html"
    success_url = reverse_lazy("accounts:index")

class DeleteView(generic.DeleteView):
    model = models.Main
    template_name = "delete.html"
    success_url = reverse_lazy("accounts:index")

class Logout(LoginRequiredMixin, LogoutView):
    template_name = "login.html"

# from lib2to3.pgen2.pgen import generate_grammar
from django.shortcuts import render
from django.views import generic
# from django.forms import InquiryForm

# Create your views here.
# def index(request):
#     return render(request, 'site_app/index.html', {})

class IndexView(generic.TemplateView):
    template_name = "site_app/top.html"

class PythonView(generic.TemplateView):
    template_name = "site_app/python.html"

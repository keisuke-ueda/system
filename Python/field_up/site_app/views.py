# from lib2to3.pgen2.pgen import generate_grammar
from django.shortcuts import render
from django.views import generic
from .forms import ContactForm
from django.urls import reverse_lazy
# from django.contrib import messages


# Create your views here.

# TOP
class IndexView(generic.TemplateView):
    template_name = "site_app/top.html"

# Company
class CompanyView(generic.TemplateView):
    template_name = "site_app/company.html"

# NEWS
class NewsView(generic.TemplateView):
    template_name = "site_app/news.html"

# Contacts & FAQ
class ContactsFaqView(generic.FormView):
    template_name = "site_app/contacts_faq.html"
    form_class = ContactForm
    success_url = reverse_lazy('site_app:contact_result')

    def form_valid(self, form):
        form.send_email()
        return super().form_valid(form)

# 送信完了ページ
class ContactResultView(generic.TemplateView):
    template_name = "site_app/contact_result.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['success'] = "お問い合わせありがとうございます。折り返しご連絡いたします。"
        return context

# デジタルの魅力
class AppealView(generic.TemplateView):
    template_name = "site_app/appeal.html"

# システム開発とは
class ExampleView(generic.TemplateView):
    template_name = "site_app/example.html"

class Example1View(generic.TemplateView):
    template_name = "site_app/examples/example-1.html"

class Example2View(generic.TemplateView):
    template_name = "site_app/examples/example-2.html"

class Example3View(generic.TemplateView):
    template_name = "site_app/examples/example-3.html"


# プログラミングとは
class langView(generic.TemplateView):
    template_name = "site_app/lang.html"

class PythonView(generic.TemplateView):
    template_name = "site_app/languages/python.html"

class JavaView(generic.TemplateView):
    template_name = "site_app/languages/java.html"

class VbaView(generic.TemplateView):
    template_name = "site_app/languages/vba.html"

class HtmlView(generic.TemplateView):
    template_name = "site_app/languages/html.html"

class CssView(generic.TemplateView):
    template_name = "site_app/languages/css.html"

class SwiftView(generic.TemplateView):
    template_name = "site_app/languages/swift.html"


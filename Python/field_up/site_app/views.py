# from lib2to3.pgen2.pgen import generate_grammar
from django.shortcuts import render
from django.views import generic
from .forms import ContactForm
from django.urls import reverse_lazy
from accounts.models import Main
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

class VbaView(generic.ListView):
    template_name = "site_app/languages/vba.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 1)
        return queryset

class PythonView(generic.ListView):
    template_name = "site_app/languages/python.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 2)
        return queryset

class JavaView(generic.ListView):
    template_name = "site_app/languages/java.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 3)
        return queryset

class PowerAutomateView(generic.ListView):
    template_name = "site_app/languages/powerautomate.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 4)
        return queryset

class KotlinView(generic.ListView):
    template_name = "site_app/languages/kotlin.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 5)
        return queryset

class CssView(generic.ListView):
    template_name = "site_app/languages/css.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 6)
        return queryset

class PhpView(generic.ListView):
    template_name = "site_app/languages/php.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 7)
        return queryset

class SwiftView(generic.ListView):
    template_name = "site_app/languages/swift.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 8)
        return queryset

class HtmlView(generic.ListView):
    template_name = "site_app/languages/html.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 9)
        return queryset

class JavaScriptView(generic.ListView):
    template_name = "site_app/languages/javascript.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 10)
        return queryset

class GoView(generic.ListView):
    template_name = "site_app/languages/go.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 11)
        return queryset

class CsharpView(generic.ListView):
    template_name = "site_app/languages/c#.html"
    model = Main
    context_object_name = "main_list"
    paginate_by = 5
    def get_queryset(self, **kwargs):
        queryset = super().get_queryset(**kwargs)
        queryset = queryset.filter(category_id = 12)
        return queryset


# from lib2to3.pgen2.pgen import generate_grammar
from django.shortcuts import render
from django.views import generic
# from django.forms import InquiryForm

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
class ContactsFaqView(generic.TemplateView):
    template_name = "site_app/contacts_faq.html"

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


# コンテンツ管理画面
class ContentsSettingLoginView(generic.TemplateView):
    template_name = "site_app/contents_setting/login.html"

class ContentsSettingIndexView(generic.TemplateView):
    template_name = "site_app/contents_setting/index.html"

class ContentsSettingEditView(generic.TemplateView):
    template_name = "site_app/contents_setting/edit.html"

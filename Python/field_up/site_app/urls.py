from django.urls import path
from . import views

app_name = 'site_app'
urlpatterns = [
    path('',views.IndexView.as_view(), name='top'),
    path('company/', views.CompanyView.as_view(), name='company'),
    path('news/', views.NewsView.as_view(), name='news'),
    path('appeal/', views.AppealView.as_view(), name='appeal'),
    
    path('contacts_faq/', views.ContactsFaqView.as_view(), name='contacts_faq'),
    path('contact_result/', views.ContactResultView.as_view(), name='contact_result'),

    path('example/', views.ExampleView.as_view(), name='example'),

    path('lang/', views.langView.as_view(), name='lang'),
    
    path('vba/', views.VbaView.as_view(), name='vba'),
    path('python/', views.PythonView.as_view(), name='python'),
    path('java/', views.JavaView.as_view(), name='java'),
    path('powerautomate/', views.PowerAutomateView.as_view(), name='powerautomate'),
    path('kotlin/', views.KotlinView.as_view(), name='kotlin'),
    path('css/', views.CssView.as_view(), name='css'),
    path('php/', views.PhpView.as_view(), name='php'),
    path('swift/', views.SwiftView.as_view(), name='swift'),
    path('html/', views.HtmlView.as_view(), name='html'),
    path('javascript/', views.JavaScriptView.as_view(), name='javascript'),
    path('go/', views.GoView.as_view(), name='go'),
    path('c#/', views.CsharpView.as_view(), name='c#'),
    
    path('swift/', views.SwiftView.as_view(), name='swift'),
]
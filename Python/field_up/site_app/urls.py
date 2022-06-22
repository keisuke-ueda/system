from pdb import post_mortem
from django.urls import path
from . import views

app_name = 'site_app'
urlpatterns = [
    path('',views.IndexView.as_view(), name='top'),
    path('python/', views.PythonView.as_view(), name='python')
]
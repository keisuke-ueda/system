from django.urls import path
from . import views

app_name = 'site_app'
urlpatterns = [
    path('',views.IndexView.as_view(), name='top'),
    path('company/', views.CompanyView.as_view(), name='company'),
    path('news/', views.NewsView.as_view(), name='news'),
    path('appeal/', views.AppealView.as_view(), name='appeal'),
    path('contacts_faq/', views.ContactsFaqView.as_view(), name='contacts_faq'),

    path('example/', views.ExampleView.as_view(), name='example'),
    path('example-1/', views.Example1View.as_view(), name='example-1'),
    path('example-2/', views.Example2View.as_view(), name='example-2'),
    path('example-3/', views.Example3View.as_view(), name='example-3'),

    path('lang/', views.langView.as_view(), name='lang'),
    path('python/', views.PythonView.as_view(), name='python'),
    path('java/', views.JavaView.as_view(), name='java'),
    path('vba/', views.VbaView.as_view(), name='vba'),
    path('html/', views.HtmlView.as_view(), name='html'),
    path('css/', views.CssView.as_view(), name='css'),
    path('swift/', views.SwiftView.as_view(), name='swift'),

    # 管理者用ページへのパス
    path('contents_setting/login', views.ContentsSettingLoginView.as_view(), name='contents_setting_login'),
    path('contents_setting/index', views.ContentsSettingIndexView.as_view(), name='contents_setting_index'),
    path('contents_setting/edit', views.ContentsSettingEditView.as_view(), name='contents_setting_edit'),
]
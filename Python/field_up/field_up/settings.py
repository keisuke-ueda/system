"""
Django settings for field_up project.

Generated by 'django-admin startproject' using Django 4.0.5.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""

import os   
from pathlib import Path
from telnetlib import AUTHENTICATION
# 本番
# import environ

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
# 本番
# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# env = environ.Env()
# env.read_env(os.path.join(BASE_DIR, '.env'))
# SECRET_KEY = env('django-insecure-w+4^8=&_9mo1+(hqf61_^&22haj)5s=!v^7*vr7pg!=e$0t@xm')
# if not DEBUG:
#     ALLOWED_HOSTS = env.list('ALLOWED_HOSTS')
#     STATIC_ROOT = '/usr/share/nginx/html/static'
#     MEDIA_ROOT = '/usr/share/nginx/html/media'

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-w+4^8=&_9mo1+(hqf61_^&22haj)5s=!v^7*vr7pg!=e$0t@xm'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
# 本番
# DEBUG = False

ALLOWED_HOSTS = ['127.0.0.1']
# 本番
# ALLOWED_HOSTS = ['150.95.219.20']

# Application definition

INSTALLED_APPS = [
    # 'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'site_app.apps.SiteAppConfig',#追記 nakano

    'accounts.apps.AccountConfig',#追記 ueda
    'django.contrib.sites',
    'allauth',
    'allauth.account',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'field_up.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join('templates'),],#追記 ueda
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'field_up.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'system_site',
        'USER': 'root',
        'PASSWORD': 'gbw21ueda',
        'HOST': 'localhost',
        'PORT': '3306',
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
            'charset': 'utf8mb4',
        },
        # 本番
        # 'default': {
        # 'ENGINE': 'django.db.backends.mysql',
        # 'NAME': '0i38d_system',
        # 'USER': '0i38d_env',
        # 'PASSWORD': '#Gbw21ueda',
        # 'HOST': 'mysql18.onamae.ne.jp',
        # 'PORT': '3306',
        # 'OPTIONS': {
        #     'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        #     'charset': 'utf8mb4',
        # },
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'ja'

TIME_ZONE = 'Asia/Tokyo'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# メディア
X_FRAME_OPTIONS = 'SAMEORIGIN'
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR,'media')

# メール設定
EMAIL_HOST = 'mail19.onamae.ne.jp'
EMAIL_HOST_USER = 'keisuke.ueda@field-up.work'
EMAIL_HOST_PASSWORD = '#Gbw21ueda'
EMAIL_PORT = 465
EMAIL_USE_SSL = True
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

AUTH_USER_MODEL = "accounts.CustomUser"

#サイト識別ID
SITE_ID = 1

# ログインログアウト
LOGIN_URL = '/login'
LOGIN_REDIRECT_URL = '/index'
LOGOUT_REDIRECT_URL = '/login'
# ACCOUNT_LOGOUT_REDIRECT_URL = ''

from aracPortfolio.common import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('PORTFOLIO_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'portfolio',
        'USER': os.environ.get('PG_Username'),
        'PASSWORD': os.environ.get('PG_Password'),
        'HOST': 'localhost',
        'PORT': '',
    }
}

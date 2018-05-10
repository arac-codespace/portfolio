from aracPortfolio.settings.common import *
import dj_database_url

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('PORTFOLIO_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['hidden-tundra-44495.herokuapp.com', '127.0.0.1:8000']

# https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Deployment
# Heroku: Update database configuration from $DATABASE_URL.
db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)

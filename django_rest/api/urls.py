from django.conf.urls import url

from .views import Contacts, ContactDeleteUpdate

urlpatterns = [
    url(r'contact/$', Contacts.as_view()),
    url(r'^contact/(?P<pk>[0-9]+)/$', ContactDeleteUpdate.as_view())
]
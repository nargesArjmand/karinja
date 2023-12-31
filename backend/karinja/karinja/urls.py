"""karinja URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

from django.conf.urls.static import static
from django.contrib import admin
from django.conf import settings
from django.urls import path, include, re_path

schema_view = get_schema_view(
    openapi.Info(
        title="Karinja API",
        default_version='v1',
        description="Karinja",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="arminshoughi@gmail.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)
admin.site.site_header = "Karinja"
admin.site.site_title = "Karinja Admin Portal"
admin.site.index_title = "Welcome To Karinja Admin Portal"

urlpatterns = [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    path('admin/', admin.site.urls),

    path('api/share/', include(('apps.share.urls', 'apps.share'), namespace='share', )),
    path('api/jobs/', include(('apps.job.urls', 'apps.job'), namespace='job', )),
    path('api/messenger/', include(('apps.messenger.urls', 'apps.messenger'), namespace='messenger', )),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

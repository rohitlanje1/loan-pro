
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings
from admin_app.views import UserView,DefaulterView,UserViewFilter
from application_generation.views import ApplicationView
from document_verification.views import DocumentView,BankView
from customer.views import EnquiryView
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import token_obtain_pair,token_refresh

router = DefaultRouter()
router.register('user',UserView,basename='user')
router.register('user_filter',UserViewFilter,basename='user_filter')
router.register('defaulter',DefaulterView,basename='defaulter')
router.register('document',DocumentView,basename='document')
router.register('application',ApplicationView,basename='application')
router.register('bank',BankView,basename='bank')
router.register('enquiry',EnquiryView,basename='enquiry')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(router.urls)),
    path('access_token/',token_obtain_pair),
    path('refresh_token/',token_refresh),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

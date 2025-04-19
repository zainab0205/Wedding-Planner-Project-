from django.urls import path, include
from django.views.generic import TemplateView
from . import views
from .views import BookServiceView, contact_admin
from .views import TestimonialListCreateAPIView
from .views import TestimonialAPI

urlpatterns = [
    # Serve the React frontend for the homepage
    path('', TemplateView.as_view(template_name="index.html")),

    # Your existing Django views
    path('services/', views.services, name='services'),
    path('event/<int:event_id>/', views.event_detail, name='event_detail'),
    path('event/<int:event_id>/book/', views.BookServiceView.as_view(), name='book_service'),
    path('contact/', contact_admin, name='contact_admin'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('api/', include('planner.api_urls')),
    path('api/testimonials/', TestimonialListCreateAPIView.as_view(), name='testimonial_api'),
    path('api/testimonials/', TestimonialAPI.as_view(), name='testimonial_api'),
]

# Serve media files in development
from django.conf import settings
from django.conf.urls.static import static
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

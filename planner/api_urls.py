from django.urls import path
from .views import PortfolioAPIView

urlpatterns = [
    path('portfolio/', PortfolioAPIView.as_view(), name='api_portfolio'),
]

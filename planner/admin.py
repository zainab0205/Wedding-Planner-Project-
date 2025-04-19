# admin.py

from django.contrib import admin
from .models import Event, Service, Testimonial, Contact, EventImage,PortfolioItem

# Registering models
admin.site.register(Event)
admin.site.register(Service)
admin.site.register(PortfolioItem)
admin.site.register(Testimonial)
admin.site.register(EventImage)
@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    search_fields = ('name', 'email')
    list_filter = ('created_at',)
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from django.views import View
from .models import PortfolioItem, Event, Testimonial, Service, Booking,Contact
from .forms import TestimonialForm
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PortfolioItemSerializer
from rest_framework import generics
from .models import Testimonial
from .serializers import TestimonialSerializer
from rest_framework import status

class TestimonialListCreateAPIView(generics.ListCreateAPIView):
    queryset = Testimonial.objects.all().order_by('-created_at')
    serializer_class = TestimonialSerializer

# Testimonial View
def testimonials_view(request):
    if request.method == "POST":
        form = TestimonialForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Thank you for submitting your testimonial!')
            return redirect('testimonials')
        else:
            messages.error(request, 'There was an error with your submission. Please try again.')
    else:
        form = TestimonialForm()

    testimonials = Testimonial.objects.all().order_by('-created_at')
    return render(request, 'planner/testimonials.html', {'testimonials': testimonials, 'form': form})


# Home View with Portfolio Items and Testimonials
def home(request):
    portfolio_items = PortfolioItem.objects.all()
    testimonials = Testimonial.objects.all().order_by('-created_at')
    form = TestimonialForm()

    if request.method == 'POST':
        form = TestimonialForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Thank you for submitting your testimonial!')
            return redirect('home')
        else:
            messages.error(request, 'There was an error with your submission. Please try again.')

    return render(request, 'planner/home.html', {
        'portfolio_items': portfolio_items,
        'testimonials': testimonials,
        'form': form,
    })


# Services View displaying all events and additional services
def services(request):
    events = Event.objects.all()
    additional_services = Service.objects.all()
    return render(request, 'planner/services.html', {'events': events, 'additional_services': additional_services})


# Event Detail View with associated services and images
def event_detail(request, event_id):
    event = get_object_or_404(Event, id=event_id)
    services = Service.objects.all()
    event_services = event.services.all()

    if request.method == 'POST':
        selected_services = request.POST.getlist('services')
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Handling booking request and service assignment
        booking = Booking.objects.create(event=event, user=request.user)
        selected_services_objs = Service.objects.filter(id__in=selected_services)
        booking.services.set(selected_services_objs)

        # Send an email notification
        send_mail(
            subject=f'Booking request for {event.name} from {name}',
            message=message,
            from_email=email,
            recipient_list=[settings.ADMIN_EMAIL],
        )

        messages.success(request, 'Your message has been sent! We will get back to you soon.')
        return redirect('event_detail', event_id=event.id)

    return render(request, 'planner/event_detail.html', {
        'event': event,
        'services': services,
        'event_services': event_services,
    })


# Booking Service View
class BookServiceView(View):
    def post(self, request, event_id):
        event = get_object_or_404(Event, id=event_id)
        selected_services = request.POST.getlist('services')

        booking = Booking.objects.create(event=event, user=request.user)
        services = Service.objects.filter(id__in=selected_services)
        booking.services.set(services)

        # Send confirmation email
        send_mail(
            subject=f'Booking Confirmation for {event.name}',
            message=f'You have booked the following services for {event.name}: {", ".join([service.service_name for service in services])}.',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[request.user.email],
        )

        messages.success(request, f'Services booked for {event.name}.')
        return redirect('event_detail', event_id=event.id)


# Contact Admin View
def contact_admin(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Save to the Contact model
        Contact.objects.create(name=name, email=email, message=message)

        # Show a success message
        messages.success(request, 'Your message has been sent successfully!')
        return redirect('contact_admin')  # Redirect to the same page

    return render(request, 'planner/contact_admin.html')


# Portfolio Page View
def portfolio(request):
    portfolio_items = PortfolioItem.objects.all()
    return render(request, 'planner/portfolio.html', {'portfolio_items': portfolio_items})

class PortfolioAPIView(APIView):
    def get(self, request):
        items = PortfolioItem.objects.all()
        serializer = PortfolioItemSerializer(items, many=True)
        return Response(serializer.data)

class TestimonialAPI(APIView):
    def post(self, request):
        serializer = TestimonialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Testimonial submitted successfully!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
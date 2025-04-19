from django import forms
from .models import Testimonial

from django import forms
from .models import Testimonial

class TestimonialForm(forms.ModelForm):
    class Meta:
        model = Testimonial
        fields = ['client_name', 'testimonial', 'image']  # Include the image field for file uploads

    # Adding placeholders to the fields
    client_name = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Enter your name', 'class': 'form-control'})
    )
    testimonial = forms.CharField(
        widget=forms.Textarea(attrs={'placeholder': 'Write your testimonial here...', 'class': 'form-control'})
    )
    image = forms.ImageField(
        widget=forms.ClearableFileInput(attrs={'class': 'form-control'})
    )

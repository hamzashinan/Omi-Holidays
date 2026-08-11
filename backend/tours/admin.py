from django.contrib import admin
from .models import Tour

@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'category', 'price', 'is_featured')
    search_fields = ('title', 'location')
    list_filter = ('category', 'is_featured')
    prepopulated_fields = {'slug': ('title',)}

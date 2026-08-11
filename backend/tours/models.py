from django.db import models

class Tour(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    location = models.CharField(max_length=255)
    region = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    duration_days = models.IntegerField()
    group_size = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    description = models.TextField()
    highlights = models.JSONField(default=list)
    image_url = models.URLField(max_length=500)
    is_featured = models.BooleanField(default=False)
    available_from = models.DateField(null=True, blank=True)
    available_to = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.title

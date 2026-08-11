import os
import django
from datetime import datetime

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from tours.models import Tour

tours_data = [
    {
        "title": "Alleppey Private Houseboat Cruise",
        "slug": "alleppey-private-houseboat-cruise",
        "location": "Alleppey",
        "region": "Kerala",
        "category": "backwaters",
        "duration_days": 2,
        "group_size": 6,
        "price": "14500.00",
        "rating": "4.9",
        "description": "Glide through Kerala backwaters with a private crew, fresh local meals, village stops, and an overnight stay on a traditional houseboat.",
        "highlights": [
            "Private kettuvallam houseboat",
            "Fresh Kerala meals onboard",
            "Village canal walk",
            "Sunset deck time",
        ],
        "image_url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
        "is_featured": True,
        "available_from": "2026-08-01",
        "available_to": "2027-03-31",
    },
    {
        "title": "Munnar Tea Valley Escape",
        "slug": "munnar-tea-valley-escape",
        "location": "Munnar",
        "region": "Kerala",
        "category": "hill-station",
        "duration_days": 3,
        "group_size": 10,
        "price": "9800.00",
        "rating": "4.8",
        "description": "Explore misty tea estates, soft trekking trails, waterfalls, and viewpoints across the Western Ghats.",
        "highlights": [
            "Tea estate walk",
            "Eravikulam National Park",
            "Waterfall stops",
            "Sunrise viewpoint",
        ],
        "image_url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
        "is_featured": True,
        "available_from": "2026-08-01",
        "available_to": "2027-03-31",
    },
    {
        "title": "Fort Kochi Heritage Walk",
        "slug": "fort-kochi-heritage-walk",
        "location": "Kochi",
        "region": "Kerala",
        "category": "culture",
        "duration_days": 1,
        "group_size": 12,
        "price": "2200.00",
        "rating": "4.7",
        "description": "A guided walk through colonial streets, spice warehouses, galleries, cafes, and the iconic Chinese fishing nets.",
        "highlights": [
            "Local storyteller guide",
            "Chinese fishing nets",
            "Spice market visit",
            "Cafe stop",
        ],
        "image_url": "https://images.unsplash.com/photo-1590123717655-8c4b7f990a48?auto=format&fit=crop&w=1200&q=80",
        "is_featured": False,
        "available_from": "2026-08-01",
        "available_to": "2027-03-31",
    },
    {
        "title": "Thekkady Wildlife And Spice Trail",
        "slug": "thekkady-wildlife-and-spice-trail",
        "location": "Thekkady",
        "region": "Kerala",
        "category": "wildlife",
        "duration_days": 2,
        "group_size": 8,
        "price": "7600.00",
        "rating": "4.8",
        "description": "Pair Periyar forest experiences with a fragrant spice plantation visit and an evening cultural performance.",
        "highlights": [
            "Periyar lake option",
            "Spice plantation tour",
            "Martial arts show",
            "Nature walk",
        ],
        "image_url": "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80",
        "is_featured": False,
        "available_from": "2026-08-01",
        "available_to": "2027-03-31",
    },
    {
        "title": "Varkala Cliff Beach Weekend",
        "slug": "varkala-cliff-beach-weekend",
        "location": "Varkala",
        "region": "Kerala",
        "category": "beach",
        "duration_days": 2,
        "group_size": 10,
        "price": "6400.00",
        "rating": "4.7",
        "description": "A relaxed beach break with cliff walks, seafood shacks, optional surfing, and a golden sunset itinerary.",
        "highlights": [
            "Cliff walk",
            "Surfing add-on",
            "Beach sunset",
            "Local food stops",
        ],
        "image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "is_featured": False,
        "available_from": "2026-08-01",
        "available_to": "2027-03-31",
    },
    {
        "title": "Kumarakom Wellness Retreat",
        "slug": "kumarakom-wellness-retreat",
        "location": "Kumarakom",
        "region": "Kerala",
        "category": "wellness",
        "duration_days": 3,
        "group_size": 6,
        "price": "18200.00",
        "rating": "4.8",
        "description": "Slow down beside Vembanad Lake with Ayurveda-inspired treatments, gentle yoga, and curated local meals.",
        "highlights": [
            "Lakeside stay",
            "Yoga sessions",
            "Ayurveda consultation",
            "Backwater canoe ride",
        ],
        "image_url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "is_featured": True,
        "available_from": "2026-08-01",
        "available_to": "2027-03-31",
    }
]

def run():
    Tour.objects.all().delete()
    for t_data in tours_data:
        Tour.objects.create(**t_data)
    print("Database populated with tours!")

if __name__ == '__main__':
    run()

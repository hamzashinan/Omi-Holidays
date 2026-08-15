import type { Tour } from "../types/tour";

export const tours: Tour[] = [
  {
    id: 1,
    title: "Alleppey Private Houseboat Cruise",
    slug: "alleppey-private-houseboat-cruise",
    location: "Alleppey",
    region: "Kerala",
    category: "backwaters",
    duration_days: 2,
    group_size: 6,
    price: "14500.00",
    rating: "4.92",
    description:
      "Glide through Kerala backwaters with a private crew, fresh local meals, village stops, and an overnight stay on a traditional houseboat.",
    highlights: [
      "Private kettuvallam houseboat",
      "Fresh Kerala meals onboard",
      "Village canal walk",
      "Sunset deck time",
    ],
    image_url:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    is_featured: true,
    available_from: "2026-08-01",
    available_to: "2027-03-31",
  },

  {
    id: 2,
    title: "Munnar Tea Valley Escape",
    slug: "munnar-tea-valley-escape",
    location: "Munnar",
    region: "Kerala",
    category: "hill-station",
    duration_days: 3,
    group_size: 10,
    price: "9800.00",
    rating: "4.86",
    description:
      "Explore misty tea estates, soft trekking trails, waterfalls, and viewpoints across the Western Ghats.",
    highlights: [
      "Tea estate walk",
      "Eravikulam National Park",
      "Waterfall stops",
      "Sunrise viewpoint",
    ],
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoBigYxaiVhONCqXt49PE-jFTI7Ykn3GuidctdUFJuA&s=10",
    is_featured: true,
    available_from: "2026-08-01",
    available_to: "2027-03-31",
  },

  {
    id: 3,
    title: "Fort Kochi Heritage Walk",
    slug: "fort-kochi-heritage-walk",
    location: "Kochi",
    region: "Kerala",
    category: "culture",
    duration_days: 1,
    group_size: 12,
    price: "2200.00",
    rating: "4.78",
    description:
      "A guided walk through colonial streets, spice warehouses, galleries, cafes, and the iconic Chinese fishing nets.",
    highlights: [
      "Local storyteller guide",
      "Chinese fishing nets",
      "Spice market visit",
      "Cafe stop",
    ],
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlWpJDJTUU0Z2LrbBMiZMctcEuZeT9_l4OIP0s4h9eQ&s=10",
    is_featured: false,
    available_from: "2026-08-01",
    available_to: "2027-03-31",
  },

  {
    id: 4,
    title: "Thekkady Wildlife And Spice Trail",
    slug: "thekkady-wildlife-and-spice-trail",
    location: "Thekkady",
    region: "Kerala",
    category: "wildlife",
    duration_days: 2,
    group_size: 8,
    price: "7600.00",
    rating: "4.81",
    description:
      "Pair Periyar forest experiences with a fragrant spice plantation visit and an evening cultural performance.",
    highlights: [
      "Periyar lake option",
      "Spice plantation tour",
      "Martial arts show",
      "Nature walk",
    ],
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYJXR1F5swBtca3_prYwryTepk-WRrSxZC4Fx5VXTsQ&s=10",
    is_featured: false,
    available_from: "2026-08-01",
    available_to: "2027-03-31",
  },

  {
    id: 5,
    title: "Varkala Cliff Beach Weekend",
    slug: "varkala-cliff-beach-weekend",
    location: "Varkala",
    region: "Kerala",
    category: "beach",
    duration_days: 2,
    group_size: 10,
    price: "6400.00",
    rating: "4.74",
    description:
      "A relaxed beach break with cliff walks, seafood shacks, optional surfing, and a golden sunset itinerary.",
    highlights: [
      "Cliff walk",
      "Surfing add-on",
      "Beach sunset",
      "Local food stops",
    ],
    image_url:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    is_featured: false,
    available_from: "2026-08-01",
    available_to: "2027-03-31",
  },

  {
  id: 6,
  title: "Wayanad Nature Escape",
  slug: "wayanad-nature-escape",
  location: "Wayanad",
  region: "Kerala",
  category: "nature",
  duration_days: 3,
  group_size: 8,
  price: "16800.00",
  rating: "4.91",
  description:
    "Experience the untouched beauty of Wayanad with waterfalls, wildlife, tea plantations, caves, and breathtaking mountain viewpoints.",
  highlights: [
    "Edakkal Caves",
    "Soochipara Waterfalls",
    "Tea plantation visit",
    "Wildlife safari & sunrise viewpoint",
  ],
  image_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXAqFXl4DOlBuooqn4aZkXtBlmO6VcNqFu2mY-stNEQ&s=10",
  is_featured: true,
  available_from: "2026-08-01",
  available_to: "2027-03-31",
},
];
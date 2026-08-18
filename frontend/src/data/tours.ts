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

{
  id: 7,
  title: "Trivandrum Heritage & Beach Tour",
  slug: "trivandrum-heritage-beach-tour",
  location: "Trivandrum",
  region: "Kerala",
  category: "culture",
  duration_days: 2,
  group_size: 10,
  price: "7200.00",
  rating: "4.84",
  description:
    "Discover the cultural capital of Kerala with historic temples, museums, Kovalam Beach, and spectacular sunset views.",
  highlights: [
    "Padmanabhaswamy Temple",
    "Kovalam Beach",
    "Napier Museum",
    "Lighthouse viewpoint",
  ],
  image_url:
    "https://th.bing.com/th/id/OIP.eRHYW4V4UGX2hSjnjvzRcgHaEK?w=252&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3 ",
  is_featured: true,
  available_from: "2026-08-01",
  available_to: "2027-03-31",
},

{
  id: 8,
  title: "Kanyakumari Sunrise Explorer",
  slug: "kanyakumari-sunrise-explorer",
  location: "Kanyakumari",
  region: "Tamil Nadu",
  category: "beach",
  duration_days: 2,
  group_size: 12,
  price: "6800.00",
  rating: "4.89",
  description:
    "Witness India's most iconic sunrise where three seas meet, with visits to Vivekananda Rock and Thiruvalluvar Statue.",
  highlights: [
    "Sunrise viewpoint",
    "Vivekananda Rock Memorial",
    "Thiruvalluvar Statue",
    "Kanyakumari Beach",
  ],
  image_url:
    "https://th.bing.com/th/id/OIP.fiAz8T5rJUc18x4nRRWKmwHaEN?w=289&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  is_featured: true,
  available_from: "2026-08-01",
  available_to: "2027-03-31",
},

{
  id: 9,
  title: "Rameswaram Temple & Island Retreat",
  slug: "rameswaram-temple-island-retreat",
  location: "Rameswaram",
  region: "Tamil Nadu",
  category: "culture",
  duration_days: 2,
  group_size: 10,
  price: "8900.00",
  rating: "4.88",
  description:
    "Explore the sacred island of Rameswaram, visit Ramanathaswamy Temple, Pamban Bridge, and the mystical Dhanushkodi.",
  highlights: [
    "Ramanathaswamy Temple",
    "Pamban Bridge",
    "Dhanushkodi Beach",
    "Island sightseeing",
  ],
  image_url:
    "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
  is_featured: false,
  available_from: "2026-08-01",
  available_to: "2027-03-31",
},

{
  id: 10,
  title: "Madurai Temple & Heritage Escape",
  slug: "madurai-temple-heritage-escape",
  location: "Madurai",
  region: "Tamil Nadu",
  category: "culture",
  duration_days: 2,
  group_size: 12,
  price: "7500.00",
  rating: "4.85",
  description:
    "Experience the timeless charm of Madurai through its magnificent temples, bustling markets, and authentic South Indian cuisine.",
  highlights: [
    "Meenakshi Amman Temple",
    "Thirumalai Nayakkar Palace",
    "Traditional food tour",
    "Evening temple ceremony",
  ],
  image_url:
    "https://th.bing.com/th/id/OIP.fEw7-d1iEKPHabbVrExrJAHaD4?w=344&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  is_featured: false,
  available_from: "2026-08-01",
  available_to: "2027-03-31",
}
];
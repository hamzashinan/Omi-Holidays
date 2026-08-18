import { useState } from "react";
import { Users, Heart, Map, Car, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Family Tours",
    description: "Easy, joyful journeys designed for families of every age.",
    details:
      "Enjoy family-friendly destinations, comfortable hotels, sightseeing, and activities suitable for children, parents, and seniors.",
  },
  {
    icon: Heart,
    title: "Honeymoon Trips",
    description: "Private and romantic experiences in Kerala.",
    details:
      "Experience luxury resorts, candlelight dinners, private houseboats, and romantic hill station getaways tailored for couples.",
  },
  {
    icon: Map,
    title: "Custom Trips",
    description: "We'll create the trip around you.",
    details:
      "Choose your destinations, duration, hotel category, and activities—we'll design a personalized Kerala itinerary for you.",
  },
  {
    icon: Car,
    title: "Comfort Travel",
    description: "Comfortable transportation across Kerala.",
    details:
      "Travel in clean AC vehicles with professional drivers, airport pickup, sightseeing transport, and 24/7 travel support.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-heading">
          <span className="services-label">WHY OMI HOLIDAYS</span>
          <h2>
            Travel made <span>simple.</span>
          </h2>
          <p>
            From your first enquiry to your journey home, we're here whenever
            you need us.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={26} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                {activeIndex === index && (
                  <div className="service-details">
                    <p>{service.details}</p>
                  </div>
                )}

                <button
                  className="service-link"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  {activeIndex === index ? "Show Less" : "Learn More"}
                  <ArrowRight size={16} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
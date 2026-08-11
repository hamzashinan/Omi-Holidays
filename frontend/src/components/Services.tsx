import {
  Users,
  Heart,
  Map,
  Car,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Family Tours",
    description:
      "Easy, joyful journeys designed for families of every age.",
  },
  {
    icon: Heart,
    title: "Honeymoon Trips",
    description:
      "Private and romantic experiences in Kerala's most beautiful destinations.",
  },
  {
    icon: Map,
    title: "Custom Trips",
    description:
      "Your dates, pace, destinations, and wishlist. We'll create the trip around you.",
  },
  {
    icon: Car,
    title: "Comfort Travel",
    description:
      "Thoughtful transportation and support throughout your Kerala journey.",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">

        {/* Heading */}
        <div className="services-heading">
          <span className="services-label">
            WHY OMI HOLIDAYS
          </span>

          <h2>
            Travel made <span>simple.</span>
          </h2>

          <p>
            From your first enquiry to your journey home,
            we're here whenever you need us.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.title}
              >
                <div className="service-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-link">
                  Learn more
                  <ArrowRight size={16} />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
import {
  Bus,
  Wallet,
  ShieldCheck,
  MapPinned,
} from "lucide-react";

const reasons = [
  {
    icon: Bus,
    title: "Comfortable Transportation",
    text: "Travel across Kerala in clean, air-conditioned vehicles with reliable drivers.",
  },
  {
    icon: Wallet,
    title: "Affordable Prices",
    text: "Enjoy premium holiday experiences at transparent and competitive pricing.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    text: "Your safety, comfort, and satisfaction are our highest priorities.",
  },
  {
    icon: MapPinned,
    title: "Experienced Local Guides",
    text: "Discover hidden gems with knowledgeable guides who know Kerala best.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="section-heading">
          <span className="section-tag">WHY CHOOSE OMI HOLIDAYS</span>

          <h2>
            Your Journey, Your Way.
            <br />
            <span>Our Expertise.</span>
          </h2>

          <p>
            We create memorable Kerala experiences with comfort, safety and
            personalized service from start to finish.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div className="why-card" key={item.title}>
                <div className="icon-box">
                  <Icon size={30} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
const reasons = [
  {
    icon: '✓',
    title: 'Comfortable Transportation',
    text: 'Travel Kerala comfortably with reliable transportation.',
  },
  {
    icon: '₹',
    title: 'Affordable Prices',
    text: 'Premium Kerala experiences at competitive prices.',
  },
  {
    icon: '★',
    title: 'Safe & Reliable',
    text: 'Your safety and comfort are always our priority.',
  },
  {
    icon: '◆',
    title: 'Experienced Guides',
    text: 'Explore Kerala with knowledgeable local guides.',
  },
]

export default function WhyChoose() {
  return (
    <section className="why-section">

      <div className="section-heading">
        <p>WHY CHOOSE OMI HOLIDAYS?</p>

        <h2>
          Your Journey, Your Way,
          <span>Our Expertise</span>
        </h2>
      </div>

      <div className="why-grid">

        {reasons.map((reason) => (
          <div className="why-card" key={reason.title}>

            <div className="why-icon">
              {reason.icon}
            </div>

            <div className="why-content">
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}
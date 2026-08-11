import type { Tour } from '../types/tour'
import TourCard from './TourCard'

interface DestinationGridProps {
  tours: Tour[]
}

export default function DestinationGrid({
  tours,
}: DestinationGridProps) {

  return (
    <section className="destinations-section" id="destinations">
      <div className="destinations-container">
        <div className="section-heading" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p className="section-label" style={{ color: 'var(--green-700)', fontWeight: 700, letterSpacing: '2px', fontSize: '12px', marginBottom: '10px' }}>EXPLORE KERALA</p>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 54px)', fontFamily: '"Playfair Display", serif', color: 'var(--green-950)' }}>
            Iconic <span style={{ color: 'var(--gold)' }}>Destinations</span>
          </h2>
        </div>

        <div className="tour-grid">

        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
          />
        ))}

        </div>
      </div>
    </section>
  )
}
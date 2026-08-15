import DestinationGrid from "../components/DestinationGrid";
import { tours } from "../data/tours";

export default function Tours() {
  return (
    <main>
      <section className="page-header">
        <p>DISCOVER KERALA</p>

        <h1>
          Our <span>Tours</span>
        </h1>

        <p className="page-header-description">
          Choose your perfect Kerala experience.
        </p>
      </section>

      <DestinationGrid tours={tours} />
    </main>
  );
}
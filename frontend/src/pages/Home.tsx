import Hero from "../components/Hero";
import Services from "../components/Services";
import DestinationGrid from "../components/DestinationGrid";
import { tours } from "../data/tours";

export default function Home() {
  return (
    <main>
      <Hero />

      <Services />

      <DestinationGrid tours={tours} />
    </main>
  );
}
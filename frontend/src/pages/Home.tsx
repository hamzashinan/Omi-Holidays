import Hero from "../components/Hero";
import Services from "../components/Services";
import DestinationGrid from "../components/DestinationGrid";
import { useEffect, useState } from "react";
import type { Tour } from "../types/tour";
import { getTours } from "../services/api";
export default function Home() {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    getTours()
      .then(data => setTours(data))
      .catch(err => console.error("Error fetching tours:", err));
  }, []);

  return (
    <main>
      <Hero />

      <Services />

      <DestinationGrid tours={tours} />
    </main>
  );
}
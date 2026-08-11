import DestinationGrid from "../components/DestinationGrid";
import { useEffect, useState, useMemo } from "react";
import type { Tour } from "../types/tour";
import { getTours } from "../services/api";

export default function Tours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getTours()
      .then(data => setTours(data))
      .catch(err => console.error("Error fetching tours:", err));
  }, []);

  const filteredTours = useMemo(() => {
    if (!searchQuery.trim()) return tours;
    const query = searchQuery.toLowerCase();
    return tours.filter(tour => 
      tour.title.toLowerCase().includes(query) || 
      tour.location.toLowerCase().includes(query) ||
      tour.category.toLowerCase().includes(query)
    );
  }, [tours, searchQuery]);

  return (
    <main className="tours-page">

      {/* Page Header */}
      <section className="page-header">
        <p className="section-label">
          DISCOVER KERALA
        </p>

        <h1>
          Our <span>Tours</span>
        </h1>

        <p className="page-header-description">
          Choose your perfect Kerala experience.
        </p>
      </section>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search tours, locations, or categories..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Tours */}
      <DestinationGrid tours={filteredTours} />

    </main>
  );
}
const API_URL =
  import.meta.env.VITE_API_URL || "https://omi-holidays.onrender.com/api";
  
export async function getTours() {
  const response = await fetch(`${API_URL}/tours/`);

  if (!response.ok) {
    throw new Error("Failed to fetch tours");
  }

  return response.json();
}

export async function getTourBySlug(slug: string) {
  const response = await fetch(`${API_URL}/tours/${slug}/`);

  if (!response.ok) {
    throw new Error("Failed to fetch tour");
  }

  return response.json();
}
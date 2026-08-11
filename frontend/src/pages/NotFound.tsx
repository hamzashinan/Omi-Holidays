import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f4e9] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17643f]">
          OMI Holidays
        </p>

        <h1 className="mt-4 text-7xl font-bold text-[#123b2a]">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
          Destination not found
        </h2>

        <p className="mt-3 max-w-md text-gray-600">
          Sorry, we couldn't find the page you're looking for.
          Let's get you back to Kerala.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-[#17643f] px-7 py-3 font-semibold text-white transition hover:bg-[#0f4d30]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
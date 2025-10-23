import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Platforms() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const platforms = ["Netflix", "Prime", "Disney+", "Showmax", "Viki"];
  const movies = ["Inception", "Moana", "Parasite", "The Boys", "Frozen"];

  const filtered = movies.filter(m => m.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Choose Platform</h2>
      <div className="flex gap-4 flex-wrap">
        {platforms.map(p => (
          <button key={p} className="bg-accent text-black px-4 py-2 rounded">{p}</button>
        ))}
      </div>
      <input
        className="p-2 rounded w-full mt-4"
        placeholder="Search for a movie..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="space-y-2">
        {filtered.map(title => (
          <div
            key={title}
            className="bg-gray-800 p-4 rounded cursor-pointer"
            onClick={() => navigate(`/movie/${title}`)}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}

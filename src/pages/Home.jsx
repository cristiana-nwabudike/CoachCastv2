import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="p-6 space-y-6">
      <div className="flex gap-4">
        <button onClick={() => navigate("/invite")} className="bg-accent text-black px-4 py-2 rounded">Invite to Couch</button>
        <button onClick={() => navigate("/platforms")} className="bg-accent text-black px-4 py-2 rounded">Platforms</button>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Recently Streamed</h2>
        <div className="bg-gray-800 p-4 rounded mt-2">Movie A, Movie B...</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Friends Are Watching</h2>
        <div className="bg-gray-800 p-4 rounded mt-2">Movie X, Movie Y...</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Vote for Next Movie</h2>
        <div className="bg-gray-800 p-4 rounded mt-2">Poll UI here</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Suggestions by Genre</h2>
        <div className="bg-gray-800 p-4 rounded mt-2">Action, Comedy...</div>
      </div>
    </div>
  );
}

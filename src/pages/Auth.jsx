import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/primeImage.webp')" }}
    >
      <div className="bg-black bg-opacity-70 p-10 rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-6 text-accent">Couch Cast</h1>
        <input className="mb-4 p-2 w-full rounded" placeholder="Email" />
        <input className="mb-4 p-2 w-full rounded" placeholder="Password" type="password" />
        <button
          className="bg-accent text-black px-4 py-2 rounded w-full"
          onClick={() => navigate("/home")}
        >
          Sign In / Sign Up
        </button>
      </div>
    </div>
  );
}

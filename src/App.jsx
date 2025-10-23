import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Invite from "./pages/Invite";
import Platforms from "./pages/Platforms";
import MovieShare from "./pages/MovieShare";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/movie/:title" element={<MovieShare />} />
      </Routes>
    </Router>
  );
}

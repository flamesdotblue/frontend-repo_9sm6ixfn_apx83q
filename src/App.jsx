import { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LobbyPreview from "./components/LobbyPreview";
import Footer from "./components/Footer";

function App() {
  const lobbyRef = useRef(null);

  const handlePlay = () => {
    const el = document.getElementById("lobby");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLogin = () => {
    // For MVP landing, this can open a simple prompt. Later, wire to backend auth.
    const username = window.prompt("Enter a username to continue:");
    if (username) {
      // Store temporarily; full auth to be implemented with backend in later phase
      localStorage.setItem("bz_username", username);
      handlePlay();
    }
  };

  return (
    <div className="min-h-screen text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black">
      <Navbar onPlayClick={handlePlay} onLoginClick={handleLogin} />
      <main>
        <HeroSection onPlayClick={handlePlay} />
        <FeatureHighlights />
        <LobbyPreview ref={lobbyRef} />
      </main>
      <Footer />
    </div>
  );
}

function FeatureHighlights() {
  const features = [
    {
      title: "Realtime Multiplayer",
      desc: "Rooms support 2–4 players. Join friends and battle fast.",
    },
    {
      title: "Mobile + PC Controls",
      desc: "WASD or on‑screen joystick with tap‑to‑shoot for phones.",
    },
    {
      title: "Phaser‑powered Arena",
      desc: "Smooth movement, bullets, collision, and health system.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What you can play today</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          A tight MVP built for speed: jump in, move, aim, shoot, and be the last one standing.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition"
            >
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;

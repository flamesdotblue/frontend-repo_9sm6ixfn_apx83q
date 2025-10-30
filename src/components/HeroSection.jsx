import Spline from "@splinetool/react-spline";

export default function HeroSection({ onPlayClick }) {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/NkcnsJpx2b5y-eA7/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient veil to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <p className="text-orange-400 font-semibold tracking-wide">Made by Likhith</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            BattleZone
          </h1>
          <p className="mt-4 text-lg text-white/80">
            A fast, browser-based battle royale. Jump into a mini arena, move, aim, and
            outlast the rest. Built for mobile and desktop.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={onPlayClick}
              className="rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 font-semibold shadow hover:opacity-95 active:opacity-90 transition"
            >
              Play Now
            </button>
            <a
              href="#lobby"
              className="rounded-md px-6 py-3 font-semibold border border-white/20 hover:bg-white/10 transition"
            >
              View Lobby
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

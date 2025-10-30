import { User, Play } from "lucide-react";

export default function Navbar({ onPlayClick, onLoginClick }) {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-rose-600 shadow" />
          <span className="font-extrabold tracking-tight text-xl">BattleZone</span>
        </a>
        <nav className="flex items-center gap-2">
          <button
            onClick={onPlayClick}
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-2 text-sm font-semibold shadow hover:opacity-95 active:opacity-90 transition"
          >
            <Play className="h-4 w-4" />
            Play Now
          </button>
          <button
            onClick={onLoginClick}
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold border border-white/20 hover:bg-white/10 transition"
          >
            <User className="h-4 w-4" />
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}

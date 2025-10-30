export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
        <p>
          © {new Date().getFullYear()} BattleZone • Built with love. Legal: no BGMI assets or trademarks used.
        </p>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <span className="opacity-40">•</span>
          <a href="#" className="hover:text-white transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}

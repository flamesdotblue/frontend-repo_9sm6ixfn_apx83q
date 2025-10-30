import { Users, PlusCircle } from "lucide-react";

const rooms = [
  { id: "alpha", players: 2, capacity: 4 },
  { id: "bravo", players: 1, capacity: 4 },
  { id: "charlie", players: 3, capacity: 4 },
];

export default function LobbyPreview() {
  return (
    <section id="lobby" className="relative py-16 sm:py-20 bg-gradient-to-b from-black via-black to-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Lobby</h2>
            <p className="mt-2 text-white/70">Create a room or join one that’s filling up.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 text-sm font-semibold transition">
            <PlusCircle className="h-4 w-4" />
            Create Room
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-400" />
                  <h3 className="font-semibold uppercase tracking-wide">{room.id}</h3>
                </div>
                <span className="text-sm text-white/70">
                  {room.players}/{room.capacity}
                </span>
              </div>
              <button className="mt-4 w-full rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-2 font-semibold hover:opacity-95 active:opacity-90 transition">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

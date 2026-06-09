"use client";

import Link from "next/link";

const hotspots = [
  {
    href: "/case/food",
    label: "Gaza",
    className: "left-[57%] top-[45%] bg-red-500 text-red-500"
  },
  {
    href: "/case/animals",
    label: "Ukraine",
    className: "left-[52%] top-[33%] bg-yellow-300 text-yellow-300"
  },
  {
    href: "/case/health",
    label: "Sudan",
    className: "left-[55%] top-[57%] bg-cyan-400 text-cyan-400"
  }
];

export default function WorldMapGlobe() {
  return (
    <div className="relative h-[430px] w-full overflow-hidden rounded-[2rem] bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,#2563eb_0%,#0b3b73_34%,#031225_68%,#020617_100%)]" />

      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-cyan-300 shadow-[0_0_70px_rgba(34,211,238,0.55)]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World map"
          className="absolute left-[-35%] top-[12%] h-[72%] w-[170%] opacity-70 invert sepia saturate-200 hue-rotate-[95deg]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.34),transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:34px_34px] opacity-35" />

        <div className="absolute inset-0 rounded-full shadow-[inset_-55px_-30px_70px_rgba(0,0,0,0.55),inset_35px_20px_45px_rgba(255,255,255,0.08)]" />

        {hotspots.map((spot) => (
          <Link
            key={spot.label}
            href={spot.href}
            className={`absolute ${spot.className} h-4 w-4 rounded-full shadow-[0_0_28px_currentColor]`}
          >
            <span className="absolute -left-3 -top-3 h-10 w-10 animate-ping rounded-full bg-current opacity-30" />
            <span className="absolute left-5 top-[-10px] whitespace-nowrap rounded-full border border-white/20 bg-black/60 px-2 py-1 text-[10px] font-black text-white backdrop-blur">
              {spot.label}
            </span>
          </Link>
        ))}
      </div>

      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
        <div>
          <div className="text-xs font-black text-cyan-300">SOS WORLD MAP</div>
          <div className="text-xl font-black text-white">Live crisis hotspots</div>
        </div>

        <div className="rounded-full bg-red-500 px-3 py-1 text-xs font-black text-white">
          LIVE
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold text-cyan-100 backdrop-blur">
        Tap Ukraine, Gaza or Sudan to open a verified case.
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";

const hotspots = [
  {
    href: "/case/food",
    label: "Gaza",
    title: "Food support",
    className: "left-[56%] top-[43%] bg-red-500",
  },
  {
    href: "/case/animals",
    label: "Ukraine",
    title: "Animal rescue",
    className: "left-[53%] top-[34%] bg-yellow-300",
  },
  {
    href: "/case/health",
    label: "Sudan",
    title: "Medical help",
    className: "left-[54%] top-[56%] bg-cyan-400",
  },
];

export default function WorldMapGlobe() {
  return (
    <div className="relative h-[430px] w-full overflow-hidden rounded-[2rem] bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#1e88e5_0%,#0b3b73_36%,#031225_68%,#020617_100%)]" />

      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-cyan-300 shadow-[0_0_70px_rgba(34,211,238,0.55)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.35),transparent_28%)]" />

        <div className="absolute inset-0 opacity-70">
          <div className="absolute left-[13%] top-[24%] h-[105px] w-[75px] rounded-[70%_35%_55%_40%] bg-emerald-700/80 rotate-[-18deg]" />
          <div className="absolute left-[25%] top-[43%] h-[135px] w-[55px] rounded-[50%_45%_70%_60%] bg-emerald-700/80 rotate-[12deg]" />
          <div className="absolute left-[41%] top-[25%] h-[78px] w-[105px] rounded-[45%_60%_45%_55%] bg-emerald-700/80 rotate-[5deg]" />
          <div className="absolute left-[49%] top-[38%] h-[130px] w-[85px] rounded-[55%_40%_55%_70%] bg-emerald-700/80 rotate-[-8deg]" />
          <div className="absolute left-[65%] top-[43%] h-[120px] w-[135px] rounded-[55%_65%_45%_55%] bg-emerald-700/80 rotate-[8deg]" />
          <div className="absolute left-[72%] top-[67%] h-[55px] w-[95px] rounded-[60%_40%_60%_40%] bg-emerald-700/80 rotate-[-12deg]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />

        {hotspots.map((spot) => (
          <Link
            key={spot.label}
            href={spot.href}
            className={`absolute ${spot.className} h-4 w-4 rounded-full shadow-[0_0_28px_currentColor]`}
          >
            <span className="absolute -left-3 -top-3 h-10 w-10 animate-ping rounded-full bg-current opacity-30" />
            <span className="absolute left-5 top-[-10px] whitespace-nowrap rounded-full border border-white/20 bg-black/55 px-2 py-1 text-[10px] font-black text-white backdrop-blur">
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

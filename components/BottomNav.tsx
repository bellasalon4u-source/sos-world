"use client";

import {
  Globe,
  Heart,
  ShieldCheck,
  Users
} from "lucide-react";

const items = [
  {
    icon: Globe,
    label: "Map",
    active: true
  },
  {
    icon: Heart,
    label: "Donate"
  },
  {
    icon: Users,
    label: "Volunteers"
  },
  {
    icon: ShieldCheck,
    label: "Verified"
  }
];

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-black bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-around px-2 py-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`flex min-w-[74px] flex-col items-center gap-1 rounded-2xl px-3 py-2 transition-all ${
                item.active
                  ? "bg-cyan-400 text-black shadow-[0_6px_0_#000]"
                  : "text-slate-700"
              }`}
            >
              <Icon size={24} strokeWidth={2.4} />
              <span className="text-[11px] font-extrabold">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

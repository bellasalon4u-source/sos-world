"use client";

import Link from "next/link";
import {
  Globe,
  Heart,
  ShieldCheck,
  Users,
  Plus
} from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-black bg-white">
      <div className="mx-auto flex max-w-md items-center justify-between px-3 py-3">

        <Link
          href="/"
          className="flex flex-col items-center gap-1"
        >
          <div className="rounded-2xl bg-cyan-400 px-4 py-3 shadow-[0_6px_0_#000]">
            <Globe size={24} strokeWidth={2.5} />
          </div>

          <span className="text-[11px] font-extrabold">
            Map
          </span>
        </Link>

        <button className="flex flex-col items-center gap-1">
          <Heart size={24} strokeWidth={2.5} />
          <span className="text-[11px] font-extrabold">
            Donate
          </span>
        </button>

        <Link
          href="/add"
          className="-mt-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-[#22c55e] shadow-[0_8px_0_#000]"
        >
          <Plus size={30} strokeWidth={3} />
        </Link>

        <button className="flex flex-col items-center gap-1">
          <Users size={24} strokeWidth={2.5} />
          <span className="text-[11px] font-extrabold">
            Volunteers
          </span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <ShieldCheck size={24} strokeWidth={2.5} />
          <span className="text-[11px] font-extrabold">
            Verified
          </span>
        </button>

      </div>
    </div>
  );
}

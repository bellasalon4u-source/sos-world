"use client";

import { useState } from "react";
import WorldMapGlobe from "../components/WorldMapGlobe";
import BottomNav from "../components/BottomNav";

export default function Home() {
  const [language, setLanguage] = useState("EN");

  const crisisCases = [
    {
      title: "Emergency food support",
      place: "Gaza",
      amount: "£12,450",
      tag: "People"
    },
    {
      title: "Rescue animals after floods",
      place: "Ukraine",
      amount: "£8,920",
      tag: "Animals"
    },
    {
      title: "Medical help for children",
      place: "Sudan",
      amount: "£15,300",
      tag: "Health"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8fbff] pb-32 text-[#07111f]">
      <section className="px-5 pt-6">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black">SOS</h1>
            <p className="text-xs text-slate-500">
              Humanity • Animals • Crisis
            </p>
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="rounded-full border-2 border-black bg-white px-3 py-2 text-xs font-bold"
          >
            <option>EN</option>
            <option>RU</option>
            <option>UK</option>
            <option>ES</option>
          </select>
        </div>

        <div className="mt-6 rounded-[2rem] border-2 border-black bg-white p-5 shadow-[8px_8px_0_#07111f]">
          <div className="mb-3 inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-600">
            🔥 Live global help map
          </div>

          <h2 className="text-4xl font-black leading-tight">
            Help people and animals in real crisis.
          </h2>

          <p className="mt-4 text-slate-600">
            SOS is a global humanitarian platform with verified cases,
            donations, volunteers and transparent reports.
          </p>

          <button className="mt-5 w-full rounded-2xl border-2 border-black bg-[#ff3b30] py-4 font-black text-white shadow-[4px_4px_0_#07111f]">
            Start helping →
          </button>
        </div>

        <div className="mt-8 rounded-[2rem] border-2 border-black bg-[#07111f] p-5">
          <div className="mb-4 text-xl font-black text-cyan-300">
            🌍 Live SOS Crisis Map
          </div>

          <WorldMapGlobe />

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/10 p-4 text-center text-white">
              <div className="text-3xl font-black">142</div>
              <div className="text-sm text-white/70">Cases</div>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center text-white">
              <div className="text-3xl font-black">38</div>
              <div className="text-sm text-white/70">Countries</div>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center text-white">
              <div className="text-3xl font-black">9k</div>
              <div className="text-sm text-white/70">Helpers</div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-5xl font-black">
            Urgent cases
          </h2>

          <div className="mt-4 space-y-5">
            {crisisCases.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border-2 border-black bg-white p-5 shadow-[6px_6px_0_#07111f]"
              >
                <div className="mb-3 flex justify-between">
                  <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-black">
                    {item.tag}
                  </span>

                  <span className="font-bold text-slate-500">
                    📍 {item.place}
                  </span>
                </div>

                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="text-slate-500">
                      Raised
                    </div>

                    <div className="text-3xl font-black">
                      {item.amount}
                    </div>
                  </div>

                  <button className="rounded-2xl border-2 border-black bg-[#00c2ff] px-6 py-3 font-black shadow-[3px_3px_0_#07111f]">
                    Donate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <BottomNav />
    </main>
  );
}

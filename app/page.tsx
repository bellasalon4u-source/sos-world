"use client";

import { useMemo, useState } from "react";
import SosGlobe from "../components/SosGlobe";
import BottomNav from "../components/BottomNav";
import {
  Heart,
  Globe2,
  ShieldCheck,
  Users,
  PawPrint,
  ArrowRight,
  Languages,
  Flame,
  MapPin,
  Sparkles
} from "lucide-react";

const languages = [
  { code: "EN", label: "English" },
  { code: "RU", label: "Русский" },
  { code: "UK", label: "Українська" },
  { code: "ES", label: "Español" },
  { code: "CS", label: "Čeština" },
  { code: "PL", label: "Polski" },
  { code: "DE", label: "Deutsch" },
  { code: "IT", label: "Italiano" },
  { code: "AR", label: "العربية" },
  { code: "HI", label: "हिन्दी" }
];

const content = {
  EN: {
    badge: "Live global help map",
    title: "Help people and animals in real crisis.",
    subtitle:
      "SOS is a global humanitarian platform with verified cases, crisis cards, donations, volunteers and transparent reports.",
    button: "Start helping",
    globe: "Live SOS Crisis Map",
    urgent: "Urgent cases",
    feed: "Live crisis feed",
    raised: "Raised",
    donate: "Donate",
    cases: "Cases",
    countries: "Countries",
    helpers: "Helpers"
  }
};

const crisisCases = [
  {
    id: 0,
    title: "Emergency food support",
    place: "Gaza",
    amount: "£12,450",
    tag: "People"
  },
  {
    id: 1,
    title: "Rescue animals after floods",
    place: "Ukraine",
    amount: "£8,920",
    tag: "Animals"
  },
  {
    id: 2,
    title: "Medical help for children",
    place: "Sudan",
    amount: "£15,300",
    tag: "Health"
  }
];

const liveFeed = [
  {
    country: "Ukraine",
    category: "Animals",
    text: "Animal shelter needs food and medicine"
  },
  {
    country: "Sudan",
    category: "Health",
    text: "Medical support needed for children"
  },
  {
    country: "Turkey",
    category: "People",
    text: "Families need emergency housing"
  }
];

export default function Home() {
  const [language] = useState("EN");
  const t = content.EN;

  const isRtl = useMemo(() => language === "AR", [language]);

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f8fbff] pb-28 text-[#07111f]"
    >
      <section className="px-5 pt-6 pb-10">

        <header className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-black">SOS</div>
            <div className="text-xs text-slate-500">
              Humanity • Animals • Crisis
            </div>
          </div>

          <div className="rounded-full border-2 border-black bg-white px-4 py-2 text-xs font-bold">
            EN — English
          </div>
        </header>

        <div className="mt-6 rounded-[2rem] border-2 border-black bg-white p-5 shadow-[8px_8px_0_#07111f]">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-600">
            <Flame size={14} />
            {t.badge}
          </div>

          <h1 className="mt-4 text-5xl font-black leading-none">
            {t.title}
          </h1>

          <p className="mt-4 text-slate-500">
            {t.subtitle}
          </p>

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-black bg-[#ff3b30] py-4 font-black text-white shadow-[4px_4px_0_#07111f]">
            {t.button}
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="mt-6 rounded-[2rem] border-2 border-black bg-[#07111f] p-5">
          <div className="mb-4 flex items-center gap-2 text-cyan-300">
            <Globe2 />
            <span className="font-black">
              {t.globe}
            </span>
          </div>

          <SosGlobe />

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-white/10 p-3 text-white">
              <div className="text-2xl font-black">142</div>
              <div className="text-xs">{t.cases}</div>
            </div>

            <div className="rounded-2xl bg-white/10 p-3 text-white">
              <div className="text-2xl font-black">38</div>
              <div className="text-xs">{t.countries}</div>
            </div>

            <div className="rounded-2xl bg-white/10 p-3 text-white">
              <div className="text-2xl font-black">9k</div>
              <div className="text-xs">{t.helpers}</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-4xl font-black">
            {t.feed}
          </h2>

          <Sparkles className="text-red-400" />
        </div>

        <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
          {liveFeed.map((item) => (
            <div
              key={item.country}
              className="min-w-[280px] rounded-[2rem] border-2 border-black bg-white p-5 shadow-[6px_6px_0_#07111f]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-black">
                  {item.category}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-black">
                {item.country}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-8">
          <h2 className="text-5xl font-black">
            {t.urgent}
          </h2>

          <div className="mt-5 space-y-5">
            {crisisCases.map((item) => (
              <a
                key={item.id}
                href={`/case?id=${item.id}`}
                className="block rounded-[2rem] border-2 border-black bg-white p-5 shadow-[6px_6px_0_#07111f]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-yellow-200 px-3 py-1 text-sm font-black">
                    {item.tag}
                  </span>

                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin size={16} />
                    {item.place}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-black">
                  {item.title}
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="text-slate-500">
                      {t.raised}
                    </div>

                    <div className="text-3xl font-black">
                      {item.amount}
                    </div>
                  </div>

                  <button className="rounded-2xl border-2 border-black bg-[#00c2ff] px-6 py-3 font-black">
                    {t.donate}
                  </button>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-3xl border-2 border-black bg-white p-4">
            <Heart className="text-red-500" />
            <h3 className="mt-3 font-black">Donations</h3>
          </div>

          <div className="rounded-3xl border-2 border-black bg-white p-4">
            <Users className="text-blue-500" />
            <h3 className="mt-3 font-black">Volunteers</h3>
          </div>

          <div className="rounded-3xl border-2 border-black bg-white p-4">
            <PawPrint className="text-orange-500" />
            <h3 className="mt-3 font-black">Animals</h3>
          </div>

          <div className="rounded-3xl border-2 border-black bg-white p-4">
            <ShieldCheck className="text-green-500" />
            <h3 className="mt-3 font-black">Verified</h3>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border-2 border-black bg-yellow-100 p-5">
          <div className="flex items-center gap-2">
            <Languages />
            <h2 className="text-2xl font-black">
              Global multilingual platform
            </h2>
          </div>

          <p className="mt-3 text-slate-700">
            SOS will support interface translations,
            auto-translated case descriptions,
            country pages, donor updates and volunteer messages.
          </p>
        </section>

      </section>

      <BottomNav />
    </main>
  );
}

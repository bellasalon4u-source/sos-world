"use client";

import Link from "next/link";

export default function CountryPage() {
  const stories = [
    {
      title: "Family from Kherson",
      text: "Needs temporary housing and food support.",
      amount: "£2,100"
    },
    {
      title: "Animal Shelter Odessa",
      text: "Food and veterinary medicine for 80 rescued animals.",
      amount: "£4,800"
    },
    {
      title: "Child Surgery Fund",
      text: "Urgent operation needed for a 7-year-old child.",
      amount: "£7,500"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8fbff] pb-24">
      <div className="mx-auto max-w-md p-5">

        <Link
          href="/"
          className="mb-4 inline-block rounded-xl border-2 border-black bg-white px-4 py-2 font-black"
        >
          ← Back
        </Link>

        <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-white shadow-[8px_8px_0_#07111f]">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200"
            alt="Country"
            className="h-56 w-full object-cover"
          />

          <div className="p-5">
            <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700 inline-block">
              COUNTRY HELP HUB
            </div>

            <h1 className="mt-4 text-4xl font-black">
              Ukraine
            </h1>

            <p className="mt-3 text-slate-600">
              Real-time humanitarian information, verified cases,
              volunteers, shelters, food support and emergency aid.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">

          <button className="rounded-3xl border-2 border-black bg-white p-5 text-left font-black shadow-[4px_4px_0_#07111f]">
            ❤️ General Help
          </button>

          <button className="rounded-3xl border-2 border-black bg-white p-5 text-left font-black shadow-[4px_4px_0_#07111f]">
            👨‍👩‍👧 People
          </button>

          <button className="rounded-3xl border-2 border-black bg-white p-5 text-left font-black shadow-[4px_4px_0_#07111f]">
            🧒 Children
          </button>

          <button className="rounded-3xl border-2 border-black bg-white p-5 text-left font-black shadow-[4px_4px_0_#07111f]">
            🐾 Animals
          </button>

          <button className="rounded-3xl border-2 border-black bg-white p-5 text-left font-black shadow-[4px_4px_0_#07111f]">
            🏥 Medical
          </button>

          <button className="rounded-3xl border-2 border-black bg-white p-5 text-left font-black shadow-[4px_4px_0_#07111f]">
            🍞 Food & Water
          </button>

          <button className="rounded-3xl border-2 border-black bg-white p-5 text-left font-black shadow-[4px_4px_0_#07111f]">
            🏠 Shelter
          </button>

          <button className="rounded-3xl border-2 border-black bg-white p-5 text-left font-black shadow-[4px_4px_0_#07111f]">
            🔍 Missing
          </button>

        </div>

        <div className="mt-8 rounded-[2rem] border-2 border-black bg-red-50 p-5">
          <h2 className="text-2xl font-black">
            🔴 Live Crisis Feed
          </h2>

          <div className="mt-4 space-y-3">

            <div className="rounded-xl bg-white p-3 font-bold">
              Flood warning reported in western region.
            </div>

            <div className="rounded-xl bg-white p-3 font-bold">
              Medical supplies urgently needed.
            </div>

            <div className="rounded-xl bg-white p-3 font-bold">
              Animal shelter requests emergency food delivery.
            </div>

          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-3xl font-black">
            Verified Stories
          </h2>

          <div className="space-y-4">
            {stories.map((story) => (
              <div
                key={story.title}
                className="rounded-[2rem] border-2 border-black bg-white p-5 shadow-[5px_5px_0_#07111f]"
              >
                <h3 className="text-xl font-black">
                  {story.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {story.text}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-black">
                    {story.amount}
                  </span>

                  <button className="rounded-xl border-2 border-black bg-[#00c2ff] px-4 py-2 font-black">
                    Donate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}

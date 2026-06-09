import SosGlobe from "../../components/SosGlobe";
import Link from "next/link";

export default function MapPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="px-5 pt-6 pb-10">

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-cyan-300 font-bold">
              SOS WORLD MAP
            </div>

            <h1 className="text-4xl font-black mt-1">
              Live Crisis Globe
            </h1>
          </div>

          <Link
            href="/"
            className="rounded-2xl border border-cyan-400 px-4 py-2 text-sm font-bold"
          >
            Home
          </Link>
        </div>

        <div className="mt-6">
          <SosGlobe />
        </div>

        <div className="mt-6 rounded-[2rem] border border-cyan-500/30 bg-cyan-500/10 p-5">
          <h2 className="text-2xl font-black">
            Active crisis hotspots
          </h2>

          <p className="mt-3 text-cyan-100">
            Tap a hotspot on the globe to view verified humanitarian cases,
            emergency requests, missing persons and animal rescue operations.
          </p>
        </div>

        <div className="mt-6 space-y-4">

          <Link
            href="/case?id=0"
            className="block rounded-3xl border border-red-400/30 bg-red-500/10 p-5"
          >
            <div className="text-red-300 text-sm font-bold">
              GAZA
            </div>

            <div className="mt-2 text-xl font-black">
              Emergency food support
            </div>
          </Link>

          <Link
            href="/case?id=1"
            className="block rounded-3xl border border-yellow-400/30 bg-yellow-500/10 p-5"
          >
            <div className="text-yellow-300 text-sm font-bold">
              UKRAINE
            </div>

            <div className="mt-2 text-xl font-black">
              Rescue animals after floods
            </div>
          </Link>

          <Link
            href="/case?id=2"
            className="block rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-5"
          >
            <div className="text-cyan-300 text-sm font-bold">
              SUDAN
            </div>

            <div className="mt-2 text-xl font-black">
              Medical help for children
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}

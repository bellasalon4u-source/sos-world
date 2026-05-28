import { Heart, Globe2, ShieldCheck, Users, PawPrint, ArrowRight } from "lucide-react";

const cases = [
  { title: "Emergency food support", place: "Gaza", amount: "£12,450", tag: "People" },
  { title: "Rescue animals after floods", place: "Ukraine", amount: "£8,920", tag: "Animals" },
  { title: "Medical help for children", place: "Sudan", amount: "£15,300", tag: "Health" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fbff] text-[#07111f]">
      <section className="px-5 pt-6 pb-10">
        <header className="flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight">SOS</div>
          <button className="rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-bold">
            EN
          </button>
        </header>

        <div className="mt-8 rounded-[2rem] border-2 border-black bg-white p-5 shadow-[8px_8px_0_#07111f]">
          <div className="mb-4 inline-flex rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-700">
            Live global help map
          </div>

          <h1 className="text-5xl font-black leading-none tracking-tight">
            Help people and animals in real crisis.
          </h1>

          <p className="mt-5 text-lg text-slate-600">
            SOS is a global humanitarian platform with verified cases, crisis cards,
            donations, volunteers and transparent reports.
          </p>

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-black bg-[#ff3b30] px-5 py-4 text-lg font-black text-white shadow-[4px_4px_0_#07111f]">
            Start helping <ArrowRight size={22} />
          </button>
        </div>

        <div className="mt-8 rounded-[2rem] border-2 border-black bg-[#07111f] p-5 text-white">
          <div className="flex items-center gap-2 text-cyan-300">
            <Globe2 />
            <span className="font-bold">Cinematic SOS Globe</span>
          </div>

          <div className="mt-6 aspect-square rounded-full border border-cyan-300 bg-[radial-gradient(circle_at_30%_30%,#6ee7ff,#10345f_45%,#020617_80%)] shadow-[0_0_60px_rgba(56,189,248,0.55)]" />

          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-white/10 p-3">
              <div className="text-2xl font-black">142</div>
              <div className="text-xs text-white/70">Cases</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-3">
              <div className="text-2xl font-black">38</div>
              <div className="text-xs text-white/70">Countries</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-3">
              <div className="text-2xl font-black">9k</div>
              <div className="text-xs text-white/70">Helpers</div>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-3xl font-black">Urgent cases</h2>

          <div className="mt-4 space-y-4">
            {cases.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border-2 border-black bg-white p-4 shadow-[5px_5px_0_#07111f]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-black">
                    {item.tag}
                  </span>
                  <span className="text-sm font-bold text-slate-500">{item.place}</span>
                </div>

                <h3 className="mt-3 text-xl font-black">{item.title}</h3>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Raised</div>
                    <div className="text-2xl font-black">{item.amount}</div>
                  </div>
                  <button className="rounded-xl border-2 border-black bg-[#00c2ff] px-4 py-2 font-black">
                    Donate
                  </button>
                </div>
              </div>
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
      </section>
    </main>
  );
}

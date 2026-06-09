export default function CasePage() {
  return (
    <main className="min-h-screen bg-[#f8fbff] p-5 pb-24">
      <div className="mx-auto max-w-md">
        <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-white shadow-[8px_8px_0_#07111f]">
          <img
            src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1200"
            alt="Case"
            className="h-72 w-full object-cover"
          />

          <div className="p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-black">
                ANIMALS
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                VERIFIED
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-black">
              Rescue animals after floods
            </h1>

            <p className="mt-2 font-bold text-slate-500">
              Ukraine • Kherson Region
            </p>

            <p className="mt-4 text-slate-600">
              Hundreds of animals have been left without food, shelter and
              veterinary care after severe flooding. Donations will fund rescue
              teams, emergency transport, food supplies, medical treatment and
              temporary shelters.
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between font-bold">
                <span>£8,920 raised</span>
                <span>£15,000 goal</span>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[59%] bg-[#00c2ff]" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-slate-100 p-3 text-center">
                <div className="text-xl font-black">127</div>
                <div className="text-xs text-slate-500">
                  Animals Saved
                </div>
              </div>

              <div className="rounded-2xl bg-slate-100 p-3 text-center">
                <div className="text-xl font-black">14</div>
                <div className="text-xs text-slate-500">
                  Volunteers
                </div>
              </div>

              <div className="rounded-2xl bg-slate-100 p-3 text-center">
                <div className="text-xl font-black">4</div>
                <div className="text-xs text-slate-500">
                  Shelters
                </div>
              </div>
            </div>

            <button className="mt-6 w-full rounded-2xl border-2 border-black bg-[#ff3b30] py-4 text-lg font-black text-white shadow-[4px_4px_0_#07111f]">
              Donate Now
            </button>

            <button className="mt-4 w-full rounded-2xl border-2 border-black bg-white py-4 text-lg font-black">
              Become Volunteer
            </button>

            <div className="mt-6 rounded-2xl border-2 border-black bg-cyan-50 p-4">
              <h3 className="font-black">
                Transparency Report
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Every donation is tracked. Donors will receive updates,
                photos and spending reports directly from the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

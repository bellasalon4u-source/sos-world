export default function AddCasePage() {
  return (
    <main className="min-h-screen bg-[#f8fbff] p-5 pb-24 text-[#07111f]">
      <div className="mx-auto max-w-md">
        <div className="rounded-[2rem] border-2 border-black bg-white p-5 shadow-[8px_8px_0_#07111f]">
          <div className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-700">
            ADD HELP REQUEST
          </div>

          <h1 className="mt-4 text-4xl font-black leading-none">
            Add a real SOS case
          </h1>

          <p className="mt-4 text-slate-600">
            Publish a request for people, animals or crisis support. Every case
            will be checked before it becomes public.
          </p>

          <div className="mt-6 space-y-4">
            <input className="w-full rounded-2xl border-2 border-black p-4 font-bold" placeholder="Case title" />
            <input className="w-full rounded-2xl border-2 border-black p-4 font-bold" placeholder="Country" />
            <input className="w-full rounded-2xl border-2 border-black p-4 font-bold" placeholder="City / Region" />

            <select className="w-full rounded-2xl border-2 border-black p-4 font-bold">
              <option>People</option>
              <option>Animals</option>
              <option>Health</option>
              <option>Missing people</option>
              <option>Emergency</option>
            </select>

            <textarea className="min-h-36 w-full rounded-2xl border-2 border-black p-4 font-bold" placeholder="Describe what happened and what help is needed" />

            <input className="w-full rounded-2xl border-2 border-black p-4 font-bold" placeholder="Fundraising goal, e.g. £5,000" />
            <input className="w-full rounded-2xl border-2 border-black p-4 font-bold" placeholder="Contact email or phone" />

            <div className="rounded-2xl border-2 border-dashed border-black bg-cyan-50 p-5 text-center">
              <div className="text-3xl">📷</div>
              <div className="mt-2 font-black">Upload photos / videos</div>
              <div className="mt-1 text-sm text-slate-600">
                Coming soon: gallery, camera and file upload
              </div>
            </div>

            <button className="w-full rounded-2xl border-2 border-black bg-[#ff3b30] py-4 text-lg font-black text-white shadow-[4px_4px_0_#07111f]">
              Submit for verification
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

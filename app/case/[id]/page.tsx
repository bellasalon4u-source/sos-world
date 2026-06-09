export default function DynamicCasePage({
  params,
}: {
  params: { id: string };
}) {
  const cases: Record<
    string,
    {
      title: string;
      image: string;
      location: string;
      amount: string;
      goal: string;
      category: string;
      description: string;
    }
  > = {
    food: {
      title: "Emergency food support",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200",
      location: "Gaza",
      amount: "£12,450",
      goal: "£20,000",
      category: "People",
      description:
        "Families urgently need food packages, clean water and basic supplies.",
    },

    animals: {
      title: "Rescue animals after floods",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200",
      location: "Ukraine",
      amount: "£8,920",
      goal: "£15,000",
      category: "Animals",
      description:
        "Rescue teams are helping animals affected by flooding and disaster.",
    },

    health: {
      title: "Medical help for children",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200",
      location: "Sudan",
      amount: "£15,300",
      goal: "£25,000",
      category: "Health",
      description:
        "Children need urgent access to medicine, doctors and treatment.",
    },
  };

  const data = cases[params.id] || cases.food;

  return (
    <main className="min-h-screen bg-[#f8fbff] p-5 pb-24">
      <div className="mx-auto max-w-md">
        <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-white shadow-[8px_8px_0_#07111f]">
          <img
            src={data.image}
            alt={data.title}
            className="h-72 w-full object-cover"
          />

          <div className="p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-black">
                {data.category}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                VERIFIED
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-black">
              {data.title}
            </h1>

            <p className="mt-2 font-bold text-slate-500">
              {data.location}
            </p>

            <p className="mt-4 text-slate-600">
              {data.description}
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between font-bold">
                <span>{data.amount} raised</span>
                <span>{data.goal} goal</span>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[60%] bg-[#00c2ff]" />
              </div>
            </div>

            <button className="mt-6 w-full rounded-2xl border-2 border-black bg-[#ff3b30] py-4 text-lg font-black text-white shadow-[4px_4px_0_#07111f]">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

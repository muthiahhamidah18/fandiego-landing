import {
  User,
  ClipboardList,
  Plane
} from "lucide-react"

function HowItWorks() {

  const steps = [
    {
      number: "1",
      icon: User,
      title: "Daftar Akun",
      description:
        "Buat akun agen atau jamaah hanya dalam beberapa menit.",
    },
    {
      number: "2",
      icon: ClipboardList,
      title: "Pilih & Kelola Paket",
      description:
        "Atur paket, pembayaran, dan dokumen jamaah dalam dashboard.",
    },
    {
      number: "3",
      icon: Plane,
      title: "Jamaah Berangkat",
      description:
        "Pantau seluruh proses keberangkatan lebih aman dan terorganisir.",
    },
  ]

  return (
    <section
      id="how"
      className="relative overflow-hidden bg-[#fafafa] pt-16 pb-28"
    >
    
    
      {/* DOT PATTERN LEFT */}
      <div className="absolute left-16 top-24 hidden lg:grid grid-cols-4 gap-3 opacity-60">

        {
          Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full bg-yellow-300"
            />
          ))
        }

      </div>

      {/* DOT PATTERN RIGHT */}
      <div className="absolute bottom-24 right-16 hidden lg:grid grid-cols-4 gap-3 opacity-60">

        {
          Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full bg-yellow-300"
            />
          ))
        }

      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1500px] px-16">

        {/* TOP */}
        <div className="text-center">

          {/* LABEL */}
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Cara Kerja
          </p>

          {/* TITLE */}
          <h2 className="mt-5 text-5xl font-bold tracking-tight text-black md:text-6xl">
            3 Langkah Mudah
          </h2>

          {/* SUBTEXT */}
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-500">
            Mulai perjalanan umroh dengan proses yang lebih praktis,
            terorganisir, dan nyaman bersama Fandiego.
          </p>

        </div>

        {/* STEPS */}
        <div className="relative mt-28 grid gap-12 lg:grid-cols-3">

          {/* LINE */}
          <div className="absolute left-1/2 top-16 hidden h-[2px] w-[65%] -translate-x-1/2 border-t-2 border-dashed border-yellow-300 lg:block"></div>

          {
            steps.map((step, index) => {

              const Icon = step.icon

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                >

                  {/* ICON WRAPPER */}
                  <div className="relative">

                    {/* NUMBER */}
                    <div className="absolute -right-2 -top-2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-lg font-bold text-white shadow-lg">
                      {step.number}
                    </div>

                    {/* ICON CONTAINER */}
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/70 bg-white/80 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2">

                      {/* INNER GLOW */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-100 to-transparent opacity-70"></div>

                      <Icon
                        size={50}
                        className="relative z-20 text-black"
                      />

                    </div>

                  </div>

                  {/* TITLE */}
                  <h3 className="mt-10 text-4xl font-bold leading-snug text-black">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-5 max-w-sm text-lg leading-relaxed text-gray-500">
                    {step.description}
                  </p>

                </div>
              )
            })
          }

        </div>

      </div>

    </section>
  )
}

export default HowItWorks
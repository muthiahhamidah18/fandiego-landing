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
      className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20"
    >

      {/* DOT PATTERN LEFT */}
      <div className="absolute left-10 top-20 hidden grid-cols-4 gap-2 opacity-50 lg:grid">

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
      <div className="absolute bottom-20 right-10 hidden grid-cols-4 gap-2 opacity-50 lg:grid">

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
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* TOP */}
        <div className="text-center">

          {/* LABEL */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-500 sm:text-sm">
            Cara Kerja
          </p>

          {/* TITLE */}
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            3 Langkah Mudah
          </h2>

          {/* SUBTEXT */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            Mulai perjalanan umroh dengan proses yang lebih praktis,
            terorganisir, dan nyaman bersama Fandiego.
          </p>

        </div>

        {/* STEPS */}
        <div className="relative mt-14 grid gap-12 lg:grid-cols-3 lg:gap-8">

          {/* CONNECTOR */}
          <div className="absolute left-1/2 top-12 hidden h-[2px] w-[60%] -translate-x-1/2 border-t-2 border-dashed border-yellow-300 lg:block"></div>

          {
            steps.map((step, index) => {

              const Icon = step.icon

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                >

                  {/* ICON */}
                  <div className="relative">

                    {/* NUMBER */}
                    <div className="absolute -right-1 -top-1 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-white shadow-lg sm:h-10 sm:w-10">
                      {step.number}
                    </div>

                    {/* ICON WRAPPER */}
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-100 transition duration-300 hover:-translate-y-2 sm:h-28 sm:w-28">

                      {/* INNER GLOW */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-100 to-transparent opacity-60"></div>

                      <Icon
                        size={38}
                        className="relative z-20 text-black sm:size-[42px]"
                      />

                    </div>

                  </div>

                  {/* TITLE */}
                  <h3 className="mt-7 text-2xl font-bold leading-snug text-black sm:text-3xl">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500 sm:text-base">
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
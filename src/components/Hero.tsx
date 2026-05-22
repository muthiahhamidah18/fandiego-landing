function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden bg-white">

        <div className="mx-auto grid max-w-[1700px] items-center gap-20 px-16 py-12 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            {/* TAG */}
            <div className="mb-6 inline-flex rounded-full bg-yellow-100 px-5 py-2">
              <p className="text-sm font-semibold text-yellow-700">
                Platform Umroh Modern
              </p>
            </div>

            {/* TITLE */}
            <h1 className="max-w-3xl text-6xl font-bold leading-tight text-black md:text-[88px]">
              Kelola Jamaah Umroh Tanpa Ribet
            </h1>

            {/* DESC */}
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-gray-500">
              Fandiego membantu agen travel dan jamaah mengelola pembayaran,
              dokumen, paket perjalanan, hingga keberangkatan dalam satu platform.
            </p>

            {/* BUTTON */}
            <div className="mt-10 flex flex-col gap-5 sm:flex-row">

              <button className="rounded-2xl bg-black px-10 py-5 text-lg font-semibold text-yellow-400 transition hover:bg-neutral-800">
                Daftar sebagai Agen
              </button>

              <button className="rounded-2xl border-2 border-black px-10 py-5 text-lg font-semibold text-black transition hover:bg-black hover:text-yellow-400">
                Daftar sebagai Jamaah
              </button>

            </div>

          </div>


          {/* RIGHT */}
          <div className="relative flex justify-end">

            {/* GLOW */}
            <div className="absolute right-20 top-20 h-[500px] w-[500px] rounded-full bg-yellow-200/50 blur-3xl"></div>

            {/* IMAGE CONTAINER */}
            <div className="relative overflow-hidden rounded-[50px]">

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 z-20 bg-gradient-to-l from-transparent via-transparent to-white/20"></div>

              {/* IMAGE */}
              <img
                src="/foto1.jpg"
                alt="Fandiego Hero"
                className="relative z-10 w-[750px] max-w-full object-contain shadow-2xl"
              />

            </div>

          </div>
        </div>

      </section>

        {/* SOCIAL PROOF */}
        <section className="border-y border-gray-200 bg-white">

          <div className="mx-auto grid max-w-[1700px] grid-cols-2 gap-10 px-10 py-8 md:grid-cols-4">

            {/* ITEM */}
            <div className="flex items-center justify-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
                <i className="ri-team-line text-2xl text-black"></i>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-black">
                  500+
                </h3>

                <p className="mt-1 text-gray-500">
                  Agen Terdaftar
                </p>
              </div>

            </div>

            {/* ITEM */}
            <div className="flex items-center justify-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
                <i className="ri-luggage-cart-line text-2xl text-black"></i>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-black">
                  10.000+
                </h3>

                <p className="mt-1 text-gray-500">
                  Jamaah Terkelola
                </p>
              </div>

            </div>

            {/* ITEM */}
            <div className="flex items-center justify-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
                <i className="ri-star-line text-2xl text-black"></i>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-black">
                  98%
                </h3>

                <p className="mt-1 text-gray-500">
                  Kepuasan Jamaah
                </p>
              </div>

            </div>

            {/* ITEM */}
            <div className="flex items-center justify-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
                <i className="ri-bank-card-line text-2xl text-black"></i>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-black">
                  1–3x
                </h3>

                <p className="mt-1 text-gray-500">
                  Cicilan Fleksibel
                </p>
              </div>

            </div>

          </div>

        </section>
    </>
  )
}

export default Hero
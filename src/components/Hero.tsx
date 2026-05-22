function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden bg-white">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-16">

          {/* LEFT */}
          <div className="order-2 lg:order-1">

            {/* TAG */}
            <div className="mb-5 inline-flex rounded-full bg-yellow-100 px-4 py-2">
              <p className="text-xs font-semibold text-yellow-700 sm:text-sm">
                Platform Umroh Modern
              </p>
            </div>

            {/* TITLE */}
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
              Kelola Jamaah Umroh Tanpa Ribet
            </h1>

            {/* DESC */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Fandiego membantu agen travel dan jamaah mengelola pembayaran,
              dokumen, paket perjalanan, hingga keberangkatan dalam satu platform.
            </p>

            {/* BUTTON */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <button className="rounded-xl bg-black px-7 py-4 text-base font-semibold text-yellow-400 transition hover:bg-neutral-800">
                Daftar sebagai Agen
              </button>

              <button className="rounded-xl border-2 border-black px-7 py-4 text-base font-semibold text-black transition hover:bg-black hover:text-yellow-400">
                Daftar sebagai Jamaah
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="order-1 lg:order-2">

            <div className="relative mx-auto max-w-[600px]">

              {/* GLOW */}
              <div className="absolute inset-0 rounded-full bg-yellow-200/40 blur-3xl"></div>

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px]">

                {/* OVERLAY */}
                <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent via-transparent to-white/10"></div>

                <img
                  src="/foto1.jpg"
                  alt="Fandiego Hero"
                  className="relative z-0 w-full object-cover shadow-2xl"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-gray-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-10">

          {/* ITEM */}
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 sm:h-14 sm:w-14">
              <i className="ri-team-line text-xl text-black sm:text-2xl"></i>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black sm:text-3xl">
                500+
              </h3>

              <p className="text-sm text-gray-500 sm:text-base">
                Agen Terdaftar
              </p>
            </div>

          </div>

          {/* ITEM */}
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 sm:h-14 sm:w-14">
              <i className="ri-luggage-cart-line text-xl text-black sm:text-2xl"></i>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black sm:text-3xl">
                10.000+
              </h3>

              <p className="text-sm text-gray-500 sm:text-base">
                Jamaah Terkelola
              </p>
            </div>

          </div>

          {/* ITEM */}
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 sm:h-14 sm:w-14">
              <i className="ri-star-line text-xl text-black sm:text-2xl"></i>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black sm:text-3xl">
                98%
              </h3>

              <p className="text-sm text-gray-500 sm:text-base">
                Kepuasan Jamaah
              </p>
            </div>

          </div>

          {/* ITEM */}
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 sm:h-14 sm:w-14">
              <i className="ri-bank-card-line text-xl text-black sm:text-2xl"></i>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black sm:text-3xl">
                1–3x
              </h3>

              <p className="text-sm text-gray-500 sm:text-base">
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
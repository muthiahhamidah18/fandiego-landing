function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        
        <div>
          <p className="mb-4 text-yellow-400">
            Platform Umroh Modern
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Kelola Jamaah Umroh Tanpa Ribet
          </h1>

          <p className="mb-8 max-w-xl text-lg text-gray-400">
            Platform digital untuk agen travel dan jamaah dalam mengelola pembayaran, dokumen, dan perjalanan umroh lebih mudah.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            
            <button className="rounded-xl bg-yellow-400 px-6 py-4 font-semibold text-black transition hover:bg-yellow-300">
              Daftar sebagai Agen
            </button>

            <button className="rounded-xl border border-yellow-400 px-6 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black">
              Daftar sebagai Jamaah
            </button>

          </div>

          <div className="mt-10 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400">
                500+
              </h2>
              <p className="text-gray-400">
                Agen Travel
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400">
                10K+
              </h2>
              <p className="text-gray-400">
                Jamaah
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 p-8 shadow-2xl shadow-yellow-400/10">
            
            <img
              src="/foto1.jpg"
              alt="Dashboard"
              className="rounded-2xl"
            />

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
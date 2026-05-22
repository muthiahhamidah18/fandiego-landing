function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20">

        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(255,214,10,0.15),transparent_35%)]"></div>

        <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_bottom_right,_rgba(255,214,10,0.1),transparent_35%)]"></div>

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-16">

        {/* TOP */}
        <div className="grid gap-12 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">

          {/* LEFT */}
          <div>

            {/* LOGO */}
            <img
              src="/logoputih.png"
              alt="Fandiego"
              className="h-12 w-auto sm:h-14"
            />

            {/* TAGLINE */}
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-300 sm:text-base">
              Platform digital modern untuk mengelola perjalanan umroh
              lebih mudah, aman, dan terpercaya.
            </p>

            {/* SOCIAL */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <i className="ri-whatsapp-line"></i>
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <i className="ri-youtube-line"></i>
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <i className="ri-facebook-circle-line"></i>
              </a>

            </div>

          </div>

          {/* NAVIGATION */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-yellow-400 sm:text-xl">
              Navigasi
            </h3>

            <div className="space-y-3">

              <a
                href="#"
                className="block text-sm text-gray-300 transition hover:text-yellow-400 sm:text-base"
              >
                Home
              </a>

              <a
                href="#features"
                className="block text-sm text-gray-300 transition hover:text-yellow-400 sm:text-base"
              >
                Fitur
              </a>

              <a
                href="#how"
                className="block text-sm text-gray-300 transition hover:text-yellow-400 sm:text-base"
              >
                Cara Kerja
              </a>

              <a
                href="#testimonials"
                className="block text-sm text-gray-300 transition hover:text-yellow-400 sm:text-base"
              >
                Testimoni
              </a>

              <a
                href="#contact"
                className="block text-sm text-gray-300 transition hover:text-yellow-400 sm:text-base"
              >
                Kontak
              </a>

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-yellow-400 sm:text-xl">
              Layanan
            </h3>

            <div className="space-y-3 text-sm text-gray-300 sm:text-base">

              <p className="transition hover:text-yellow-400">
                Paket Umroh
              </p>

              <p className="transition hover:text-yellow-400">
                Manajemen Jamaah
              </p>

              <p className="transition hover:text-yellow-400">
                Pembayaran Cicilan
              </p>

              <p className="transition hover:text-yellow-400">
                Tiket & Visa
              </p>

              <p className="transition hover:text-yellow-400">
                Dokumen
              </p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-yellow-400 sm:text-xl">
              Kontak Kami
            </h3>

            <div className="space-y-5">

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
                  <i className="ri-whatsapp-line text-base"></i>
                </div>

                <p className="text-sm text-gray-300 sm:text-base">
                  0812 3456 7890
                </p>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
                  <i className="ri-mail-line text-base"></i>
                </div>

                <p className="text-sm text-gray-300 sm:text-base">
                  @fandiego.id
                </p>

              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
                  <i className="ri-map-pin-line text-base"></i>
                </div>

                <p className="max-w-xs text-sm leading-relaxed text-gray-300 sm:text-base">
                  Jalan Cibubur Country <br />
                  Boulevard 8 Gunung Putri West Java
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-7 text-center">

          <p className="text-xs text-gray-400 sm:text-sm">
            © 2026 Fandiego. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
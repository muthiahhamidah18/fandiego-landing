function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(255,214,10,0.15),transparent_35%)]"></div>
        <div className="absolute right-0 bottom-0 h-full w-full bg-[radial-gradient(circle_at_bottom_right,_rgba(255,214,10,0.1),transparent_35%)]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1700px] px-16 py-16">

        {/* TOP */}
        <div className="grid gap-14 border-b border-white/10 pb-12 lg:grid-cols-4">

          {/* LEFT */}
          <div>

            {/* LOGO */}
            <img
              src="/logoputih.png"
              alt="Fandiego"
              className="h-14 w-auto"
            />

            {/* TAGLINE */}
            <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-gray-300">
              Platform digital modern untuk mengelola perjalanan umroh
              lebih mudah, aman, dan terpercaya.
            </p>

            {/* SOCIAL */}
            <div className="mt-8 flex items-center gap-4">

              {/* ICON */}
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <i className="ri-whatsapp-line"></i>
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <i className="ri-youtube-line"></i>
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <i className="ri-facebook-circle-line"></i>
              </a>

            </div>

          </div>

          {/* NAVIGATION */}
          <div>

            <h3 className="mb-6 text-xl font-semibold text-yellow-400">
              Navigasi
            </h3>

            <div className="space-y-4">

              <a
                href="#"
                className="block text-gray-300 transition hover:text-yellow-400"
              >
                Home
              </a>

              <a
                href="#features"
                className="block text-gray-300 transition hover:text-yellow-400"
              >
                Fitur
              </a>

              <a
                href="#how"
                className="block text-gray-300 transition hover:text-yellow-400"
              >
                Cara Kerja
              </a>

              <a
                href="#testimonials"
                className="block text-gray-300 transition hover:text-yellow-400"
              >
                Testimoni
              </a>

              <a
                href="#contact"
                className="block text-gray-300 transition hover:text-yellow-400"
              >
                Kontak
              </a>

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="mb-6 text-xl font-semibold text-yellow-400">
              Layanan
            </h3>

            <div className="space-y-4 text-gray-300">

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

            <h3 className="mb-6 text-xl font-semibold text-yellow-400">
              Kontak Kami
            </h3>

            <div className="space-y-5">

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
                  <i className="ri-whatsapp-line text-lg"></i>
                </div>

                <p className="text-gray-300">
                  0812 3456 7890
                </p>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
                  <i className="ri-mail-line text-lg"></i>
                </div>

                <p className="text-gray-300">
                  @fandiego.id
                </p>

              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>

                <p className="max-w-xs leading-relaxed text-gray-300">
                  Jalan Cibubur Country  <br />
                  Boulevard 8 Gunung Putri West Java
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 text-center">

          <p className="text-gray-400">
            © 2026 Fandiego. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
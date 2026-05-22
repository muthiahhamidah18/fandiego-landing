import { Menu, X } from "lucide-react"
import { useState } from "react"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">

      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">

        {/* LOGO */}
        <img
          src="/logo.jpg"
          alt="Fandiego Logo"
          className="h-12 w-auto md:h-14 lg:h-16"
        />

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-10 lg:flex">

          <a
            href="#features"
            className="text-lg font-medium text-black transition hover:text-yellow-500"
          >
            Fitur
          </a>

          <a
            href="#how"
            className="text-lg font-medium text-black transition hover:text-yellow-500"
          >
            Cara Kerja
          </a>

          <a
            href="#testimonials"
            className="text-lg font-medium text-black transition hover:text-yellow-500"
          >
            Testimoni
          </a>

          <a
            href="#contact"
            className="text-lg font-medium text-black transition hover:text-yellow-500"
          >
            Kontak
          </a>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5 lg:gap-10">

          {/* BUTTON DESKTOP */}
          <button className="hidden rounded-2xl bg-black px-7 py-3 text-base font-semibold text-yellow-400 transition hover:bg-neutral-800 lg:block">
            Daftar Sekarang
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >

            {
              isOpen
                ? <X size={32} className="text-black" />
                : <Menu size={32} className="text-black" />
            }

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {
        isOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">

            <div className="flex flex-col gap-6 px-6 py-8">

              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-black transition hover:text-yellow-500"
              >
                Fitur
              </a>

              <a
                href="#how"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-black transition hover:text-yellow-500"
              >
                Cara Kerja
              </a>

              <a
                href="#testimonials"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-black transition hover:text-yellow-500"
              >
                Testimoni
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-black transition hover:text-yellow-500"
              >
                Kontak
              </a>

              {/* BUTTON MOBILE */}
              <button className="mt-2 rounded-2xl bg-black px-7 py-4 text-lg font-semibold text-yellow-400 transition hover:bg-neutral-800">
                Daftar Sekarang
              </button>

            </div>

          </div>
        )
      }

    </nav>
  )
}

export default Navbar
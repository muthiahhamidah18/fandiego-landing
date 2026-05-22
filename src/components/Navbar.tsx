import { Menu, X } from "lucide-react"
import { useState } from "react"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">

      {/* CONTAINER */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">

        {/* LOGO */}
        <img
          src="/logo.jpg"
          alt="Fandiego Logo"
          className="h-10 w-auto sm:h-12 lg:h-14"
        />

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-10 lg:flex">

          <a
            href="#features"
            className="text-base font-medium text-black transition hover:text-yellow-500"
          >
            Fitur
          </a>

          <a
            href="#how"
            className="text-base font-medium text-black transition hover:text-yellow-500"
          >
            Cara Kerja
          </a>

          <a
            href="#testimonials"
            className="text-base font-medium text-black transition hover:text-yellow-500"
          >
            Testimoni
          </a>

          <a
            href="#contact"
            className="text-base font-medium text-black transition hover:text-yellow-500"
          >
            Kontak
          </a>

        </div>

        {/* RIGHT */}
        <div className="flex items-center">

          {/* BUTTON DESKTOP */}
          <button className="hidden rounded-xl bg-black px-6 py-3 text-sm font-semibold text-yellow-400 transition hover:bg-neutral-800 lg:block">
            Daftar Sekarang
          </button>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >

            {
              isOpen
                ? <X size={28} className="text-black" />
                : <Menu size={28} className="text-black" />
            }

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {
        isOpen && (

          <div className="border-t border-gray-200 bg-white lg:hidden">

            <div className="flex flex-col gap-5 px-6 py-6">

              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-black"
              >
                Fitur
              </a>

              <a
                href="#how"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-black"
              >
                Cara Kerja
              </a>

              <a
                href="#testimonials"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-black"
              >
                Testimoni
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-black"
              >
                Kontak
              </a>

              <button className="mt-2 rounded-xl bg-black px-6 py-3 text-base font-semibold text-yellow-400">
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
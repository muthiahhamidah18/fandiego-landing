import { Menu, X } from "lucide-react"
import { useState } from "react"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">

      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-12 py-7">

        {/* LOGO */}
        <img
          src="/logo.jpg"
          alt="Fandiego Logo"
          className="h-16 w-auto"
        />

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-16 md:flex">

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
        <div className="flex items-center gap-12">

          {/* BUTTON */}
          <button className="hidden rounded-2xl bg-black px-8 py-4 text-lg font-semibold text-yellow-400 transition hover:bg-neutral-800 md:block">
            Daftar Sekarang
          </button>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {
              isOpen
                ? <X size={34} className="text-black" />
                : <Menu size={34} className="text-black" />
            }
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {
        isOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">

            <div className="flex flex-col gap-6 px-8 py-8">

              <a
                href="#features"
                className="text-lg font-medium text-black"
              >
                Fitur
              </a>

              <a
                href="#how"
                className="text-lg font-medium text-black"
              >
                Cara Kerja
              </a>

              <a
                href="#testimonials"
                className="text-lg font-medium text-black"
              >
                Testimoni
              </a>

              <a
                href="#contact"
                className="text-lg font-medium text-black"
              >
                Kontak
              </a>

              <button className="mt-2 rounded-2xl bg-black px-8 py-4 text-lg font-semibold text-yellow-400">
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
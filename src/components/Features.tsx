import { Wallet, FileCheck, Plane, Users } from "lucide-react"

function Features() {
  return (
    <section
      id="features"
      className="bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="mb-4 text-yellow-400">
            Fitur Unggulan
          </p>

          <h2 className="text-4xl font-bold">
            Semua Kebutuhan Umroh dalam Satu Platform
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-yellow-400/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-yellow-400/40">
            <Wallet className="mb-4 text-yellow-400" size={40} />

            <h3 className="mb-3 text-xl font-semibold">
              Cicilan Fleksibel
            </h3>

            <p className="text-gray-400">
              Jamaah dapat mencicil pembayaran dengan lebih mudah.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-yellow-400/40">
            <FileCheck className="mb-4 text-yellow-400" size={40} />

            <h3 className="mb-3 text-xl font-semibold">
              Dokumen Terpusat
            </h3>

            <p className="text-gray-400">
              Semua dokumen jamaah tersimpan rapi dalam satu sistem.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-yellow-400/40">
            <Plane className="mb-4 text-yellow-400" size={40} />

            <h3 className="mb-3 text-xl font-semibold">
              Tiket & Visa
            </h3>

            <p className="text-gray-400">
              Proses penerbangan dan visa jadi lebih praktis.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-yellow-400/40">
            <Users className="mb-4 text-yellow-400" size={40} />

            <h3 className="mb-3 text-xl font-semibold">
              Kelola Jamaah
            </h3>

            <p className="text-gray-400">
              Pantau seluruh data jamaah dalam satu dashboard.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features
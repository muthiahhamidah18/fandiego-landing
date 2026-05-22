import {
  Plane,
  CreditCard,
  FileText,
  Package
} from "lucide-react"

function Features() {

  const features = [
    {
      icon: Package,
      title: "Paket Umroh Siap Jual",
      description:
        "Kelola dan publikasikan paket umroh dalam hitungan menit tanpa proses manual yang rumit.",
    },
    {
      icon: CreditCard,
      title: "Cicilan Fleksibel",
      description:
        "Jamaah dapat membayar 1–3 kali sesuai kemampuan dengan sistem pembayaran terorganisir.",
    },
    {
      icon: FileText,
      title: "Dokumen Terpusat",
      description:
        "Upload dan verifikasi dokumen jamaah lebih cepat dan aman dalam satu dashboard.",
    },
    {
      icon: Plane,
      title: "Tiket & Visa Terintegrasi",
      description:
        "Pantau proses penerbangan dan visa jamaah dalam satu platform praktis.",
    },
  ]

  return (
    <section
      id="features"
      className="bg-white pt-28 pb-16"
    >

      <div className="mx-auto max-w-[1400px] px-16">

        {/* TOP */}
        <div className="text-center">

          {/* LABEL */}
          <div className="mb-5 inline-flex rounded-full bg-yellow-100 px-5 py-2">
            <p className="text-sm font-semibold text-yellow-700">
              Fitur Unggulan
            </p>
          </div>

          {/* TITLE */}
          <h2 className="mx-auto max-w-3xl text-5xl font-bold leading-tight text-black">
            Semua Kebutuhan Umroh dalam Satu Platform
          </h2>

        </div>

        {/* GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {
            features.map((feature, index) => {

              const Icon = feature.icon

              return (
                <div
                  key={index}
                  className="group rounded-[32px] border border-gray-200 bg-white p-10 transition duration-300 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-xl"
                >

                  {/* ICON */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400">

                    <Icon
                      size={36}
                      className="text-black"
                    />

                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-3xl font-bold leading-snug text-black">
                    {feature.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-5 text-lg leading-relaxed text-gray-500">
                    {feature.description}
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

export default Features
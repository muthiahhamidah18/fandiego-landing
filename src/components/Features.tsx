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
      className="bg-white py-16 sm:py-20"
    >

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* TOP */}
        <div className="text-center">

          {/* LABEL */}
          <div className="mb-4 inline-flex rounded-full bg-yellow-100 px-4 py-2">
            <p className="text-xs font-semibold text-yellow-700 sm:text-sm">
              Fitur Unggulan
            </p>
          </div>

          {/* TITLE */}
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Semua Kebutuhan Umroh dalam Satu Platform
          </h2>

          {/* DESC */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            Platform modern untuk membantu agen travel dan jamaah mengelola perjalanan umroh lebih praktis dan profesional.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">

          {
            features.map((feature, index) => {

              const Icon = feature.icon

              return (
                <div
                  key={index}
                  className="group rounded-[28px] border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-xl sm:p-8"
                >

                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 shadow-sm">

                    <Icon
                      size={30}
                      className="text-black"
                    />

                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-2xl font-bold leading-snug text-black sm:text-[28px]">
                    {feature.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
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
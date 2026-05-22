import {
  Star
} from "lucide-react"

function Testimonials() {

  const testimonials = [
    {
      initials: "AR",
      name: "Ahmad Rizki",
      role: "Owner Agen Surabaya",
      quote:
        "Fandiego membuat pengelolaan jamaah jauh lebih rapi dan praktis. Tim kami sekarang bisa fokus melayani jamaah tanpa ribet administrasi.",
    },
    {
      initials: "NS",
      name: "Nurul Sari",
      role: "Jamaah Umroh",
      quote:
        "Proses pembayaran dan upload dokumen jadi sangat mudah. Saya bisa memantau semua kebutuhan perjalanan langsung dari platform.",
    },
    {
      initials: "FH",
      name: "Fajar Hidayat",
      role: "Travel Consultant Jakarta",
      quote:
        "Dashboard-nya simpel dan mudah dipahami. Sangat membantu untuk mengatur paket, visa, dan tiket jamaah dalam satu tempat.",
    },
  ]

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >

      {/* GLOW */}
      <div className="absolute -right-20 top-10 h-[350px] w-[350px] rounded-full bg-yellow-100/70 blur-3xl sm:h-[500px] sm:w-[500px]"></div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* TOP */}
        <div className="text-center">

          {/* LABEL */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-500 sm:text-sm">
            Testimoni
          </p>

          {/* TITLE */}
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Apa Kata Mereka?
          </h2>

          {/* SUBTEXT */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            Dipercaya oleh agen travel dan jamaah untuk mengelola perjalanan umroh dengan lebih mudah.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">

          {
            testimonials.map((testimonial, index) => (

              <div
                key={index}
                className="group rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
              >

                {/* STARS */}
                <div className="flex items-center gap-1">

                  {
                    Array.from({ length: 5 }).map((_, starIndex) => (

                      <Star
                        key={starIndex}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />

                    ))
                  }

                </div>

                {/* QUOTE */}
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  "
                  {testimonial.quote}
                  "
                </p>

                {/* PROFILE */}
                <div className="mt-8 flex items-center gap-4">

                  {/* AVATAR */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-lg font-bold text-black shadow-md sm:h-16 sm:w-16 sm:text-xl">

                    {testimonial.initials}

                  </div>

                  {/* INFO */}
                  <div>

                    <h3 className="text-lg font-bold text-black sm:text-xl">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 sm:text-base">
                      {testimonial.role}
                    </p>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Testimonials
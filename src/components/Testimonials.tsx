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
      className="relative overflow-hidden bg-white pt-20 pb-32"
    >

      {/* GLOW */}
      <div className="absolute -right-20 top-10 h-[500px] w-[500px] rounded-full bg-yellow-100/70 blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1700px] px-16">

        {/* TOP */}
        <div className="text-center">

          {/* LABEL */}
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Testimoni
          </p>

          {/* TITLE */}
          <h2 className="mt-5 text-5xl font-bold tracking-tight text-black md:text-6xl">
            Apa Kata Mereka?
          </h2>

          {/* SUBTEXT */}
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-500">
            Dipercaya oleh agen travel dan jamaah untuk mengelola perjalanan umroh dengan lebih mudah.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {
            testimonials.map((testimonial, index) => (

              <div
                key={index}
                className="group rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* STARS */}
                <div className="flex items-center gap-1">

                  {
                    Array.from({ length: 5 }).map((_, starIndex) => (

                      <Star
                        key={starIndex}
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />

                    ))
                  }

                </div>

                {/* QUOTE */}
                <p className="mt-8 text-xl leading-relaxed text-gray-600">
                  "
                  {testimonial.quote}
                  "
                </p>

                {/* PROFILE */}
                <div className="mt-10 flex items-center gap-4">

                  {/* AVATAR */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-black shadow-md">

                    {testimonial.initials}

                  </div>

                  {/* INFO */}
                  <div>

                    <h3 className="text-xl font-bold text-black">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-gray-500">
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
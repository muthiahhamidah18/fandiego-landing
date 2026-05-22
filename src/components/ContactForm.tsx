import { useState } from "react"

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    role: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    whatsapp: "",
    role: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // HANDLE INPUT
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  // VALIDATION
  const validate = () => {

    let newErrors = {
      name: "",
      email: "",
      whatsapp: "",
      role: "",
    }

    let isValid = true

    // NAME
    if (!formData.name) {
      newErrors.name = "Nama lengkap wajib diisi"
      isValid = false
    }

    // EMAIL
    if (!formData.email) {
      newErrors.email = "Email wajib diisi"
      isValid = false
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Format email tidak valid"
      isValid = false
    }

    // WHATSAPP
    if (!formData.whatsapp) {
      newErrors.whatsapp = "Nomor WhatsApp wajib diisi"
      isValid = false
    }

    // ROLE
    if (!formData.role) {
      newErrors.role = "Pilih peran Anda"
      isValid = false
    }

    setErrors(newErrors)

    return isValid
  }

  // SUBMIT
  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()

    setSuccess(false)

    if (!validate()) return

    setLoading(true)

    setTimeout(() => {

      setLoading(false)

      setSuccess(true)

      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        role: "",
      })

    }, 2000)

  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white pt-6 pb-32"
    >

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-100 blur-3xl opacity-40"></div>

      <div className="relative z-20 mx-auto max-w-[1400px] px-16">

        {/* CONTAINER */}
        <div className="relative overflow-hidden rounded-[20px] border border-gray-200 shadow-sm">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">

            {/* IMAGE */}
            <img
              src="/foto3.jpg"
              alt="Background"
              className="h-full w-full object-cover opacity-100"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[#fdfbf4]/85"></div>

          </div>

          {/* CONTENT */}
          <div className="relative z-20 grid items-center gap-10 lg:grid-cols-2">

            {/* LEFT */}
            <div className="px-10 py-14 lg:px-16">

              {/* TITLE */}
              <h2 className="max-w-xl text-5xl font-bold leading-tight text-black">
                Mulai Kelola Perjalanan Umroh Lebih Profesional
              </h2>

              {/* DESC */}
              <p className="mt-6 max-w-lg text-xl leading-relaxed text-gray-700">
                Isi form di samping dan dapatkan informasi lengkap seputar
                Fandiego.
              </p>

              {/* BENEFITS */}
              <div className="mt-10 flex flex-wrap gap-8">

                {/* ITEM */}
                <div className="flex items-center gap-3">

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-black shadow-sm">
                    ✓
                  </div>

                  <p className="text-lg font-medium text-black">
                    Gratis
                  </p>

                </div>

                {/* ITEM */}
                <div className="flex items-center gap-3">

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-black shadow-sm">
                    ✓
                  </div>

                  <p className="text-lg font-medium text-black">
                    Mudah Digunakan
                  </p>

                </div>

                {/* ITEM */}
                <div className="flex items-center gap-3">

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-black shadow-sm">
                    ✓
                  </div>

                  <p className="text-lg font-medium text-black">
                    Kami Siap Membantu
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT FORM */}
            <div className="p-6 lg:p-10">

              <form
                onSubmit={handleSubmit}
                className="rounded-[32px] border border-white/50 bg-white/90 p-8 shadow-2xl backdrop-blur-md"
              >

                {/* GRID */}
                <div className="grid gap-6 md:grid-cols-2">

                  {/* NAME */}
                  <div>

                    <label className="text-base font-semibold text-black">
                      Nama Lengkap *
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Masukkan nama lengkap"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-3 w-full rounded-2xl border border-gray-300 bg-[#fcfcfc] px-5 py-5 text-lg outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                    />

                    {
                      errors.name && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.name}
                        </p>
                      )
                    }

                  </div>

                  {/* EMAIL */}
                  <div>

                    <label className="text-base font-semibold text-black">
                      Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Masukkan email Anda"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-3 w-full rounded-2xl border border-gray-300 bg-[#fcfcfc] px-5 py-5 text-lg outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                    />

                    {
                      errors.email && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )
                    }

                  </div>

                  {/* WHATSAPP */}
                  <div>

                    <label className="text-base font-semibold text-black">
                      No. WhatsApp *
                    </label>

                    <input
                      type="text"
                      name="whatsapp"
                      placeholder="Contoh: 0812 3456 7890"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="mt-3 w-full rounded-2xl border border-gray-300 bg-[#fcfcfc] px-5 py-5 text-lg outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                    />

                    {
                      errors.whatsapp && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.whatsapp}
                        </p>
                      )
                    }

                  </div>

                  {/* ROLE */}
                  <div>

                    <label className="text-base font-semibold text-black">
                      Saya adalah *
                    </label>

                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="mt-3 w-full rounded-2xl border border-gray-300 bg-[#fcfcfc] px-5 py-5 text-lg outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                    >

                      <option value="">
                        Pilih peran Anda
                      </option>

                      <option value="Agen">
                        Agen
                      </option>

                      <option value="Jamaah">
                        Jamaah
                      </option>

                    </select>

                    {
                      errors.role && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.role}
                        </p>
                      )
                    }

                  </div>

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-black px-6 py-5 text-xl font-semibold text-yellow-400 transition duration-300 hover:-translate-y-1 hover:bg-neutral-800 disabled:opacity-70"
                >

                  {
                    loading
                      ? "Mengirim..."
                      : "Daftar Sekarang"
                  }

                </button>

                {/* SUCCESS */}
                {
                  success && (
                    <div className="mt-5 rounded-2xl bg-green-100 px-5 py-4 text-green-700">
                      Form berhasil dikirim! Tim kami akan segera menghubungi Anda.
                    </div>
                  )
                }

                {/* FOOTNOTE */}
                <p className="mt-5 text-sm leading-relaxed text-gray-500">
                  Dengan mendaftar, Anda menyetujui Syarat & Ketentuan
                  dan Kebijakan Privasi kami.
                </p>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ContactForm
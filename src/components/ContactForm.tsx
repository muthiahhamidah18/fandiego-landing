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
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-100 blur-3xl opacity-40 sm:h-[500px] sm:w-[500px]"></div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* CONTAINER */}
        <div className="relative overflow-hidden rounded-[28px] border border-gray-200 shadow-sm">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">

            {/* IMAGE */}
            <img
              src="/foto3.jpg"
              alt="Background"
              className="h-full w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[#fdfbf4]/90"></div>

          </div>

          {/* CONTENT */}
          <div className="relative z-20 grid gap-10 lg:grid-cols-2">

            {/* LEFT */}
            <div className="px-6 py-10 sm:px-8 lg:px-12 lg:py-14">

              {/* TITLE */}
              <h2 className="max-w-xl text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Mulai Kelola Perjalanan Umroh Lebih Profesional
              </h2>

              {/* DESC */}
              <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-700 sm:text-lg">
                Isi form di samping dan dapatkan informasi lengkap seputar
                Fandiego.
              </p>

              {/* BENEFITS */}
              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-6">

                {/* ITEM */}
                <div className="flex items-center gap-3">

                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black shadow-sm">
                    ✓
                  </div>

                  <p className="text-sm font-medium text-black sm:text-base">
                    Gratis
                  </p>

                </div>

                {/* ITEM */}
                <div className="flex items-center gap-3">

                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black shadow-sm">
                    ✓
                  </div>

                  <p className="text-sm font-medium text-black sm:text-base">
                    Mudah Digunakan
                  </p>

                </div>

                {/* ITEM */}
                <div className="flex items-center gap-3">

                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black shadow-sm">
                    ✓
                  </div>

                  <p className="text-sm font-medium text-black sm:text-base">
                    Kami Siap Membantu
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT FORM */}
            <div className="p-4 sm:p-6 lg:p-8">

              <form
                onSubmit={handleSubmit}
                className="rounded-[28px] border border-white/50 bg-white/90 p-5 shadow-2xl backdrop-blur-md sm:p-7"
              >

                {/* GRID */}
                <div className="grid gap-5 md:grid-cols-2">

                  {/* NAME */}
                  <div>

                    <label className="text-sm font-semibold text-black sm:text-base">
                      Nama Lengkap *
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Masukkan nama lengkap"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-gray-300 bg-[#fcfcfc] px-4 py-4 text-base outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
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

                    <label className="text-sm font-semibold text-black sm:text-base">
                      Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Masukkan email Anda"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-gray-300 bg-[#fcfcfc] px-4 py-4 text-base outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
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

                    <label className="text-sm font-semibold text-black sm:text-base">
                      No. WhatsApp *
                    </label>

                    <input
                      type="text"
                      name="whatsapp"
                      placeholder="Contoh: 0812 3456 7890"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-gray-300 bg-[#fcfcfc] px-4 py-4 text-base outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
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

                    <label className="text-sm font-semibold text-black sm:text-base">
                      Saya adalah *
                    </label>

                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-gray-300 bg-[#fcfcfc] px-4 py-4 text-base outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
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
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-base font-semibold text-yellow-400 transition duration-300 hover:-translate-y-1 hover:bg-neutral-800 disabled:opacity-70 sm:text-lg"
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
                    <div className="mt-5 rounded-xl bg-green-100 px-4 py-3 text-sm text-green-700 sm:text-base">
                      Form berhasil dikirim! Tim kami akan segera menghubungi Anda.
                    </div>
                  )
                }

                {/* FOOTNOTE */}
                <p className="mt-5 text-xs leading-relaxed text-gray-500 sm:text-sm">
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
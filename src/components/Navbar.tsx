function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <h1 className="text-2xl font-bold text-emerald-600">
          Fandiego
        </h1>

        <button className="rounded-lg bg-emerald-600 px-4 py-2 text-white">
          Daftar Sekarang
        </button>

      </div>
    </nav>
  )
}

export default Navbar
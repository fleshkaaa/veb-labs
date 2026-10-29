function Header() {
  return (
    <header className="bg-slate-900 text-white p-8 shadow-lg border-b-4 border-blue-500">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white">
            Гудаш Максим
          </h1>
          <p className="text-blue-400 text-lg mt-1 font-medium">
            Cybersecurity Student & DevSecOps Enthusiast
          </p>
        </div>
        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-emerald-500 hover:text-slate-950 transition duration-300 cursor-default">
          КБ-205 | Львівська політехніка
        </span>
      </div>
    </header>
  );
}

export default Header;

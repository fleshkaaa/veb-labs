function Education() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4">
        Освіта та навички
      </h2>
      <div className="mb-4">
        <h3 className="font-semibold text-lg text-slate-900">
          Національний університет «Львівська політехніка»
        </h3>
        <p className="text-slate-600 text-sm">
          Бакалавр з кібербезпеки (ІКТА, кафедра «ЗІ») • 2025 – дотепер
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {['Kali Linux', 'Python', 'C#', 'Docker', 'Nmap', 'Cisco Packet Tracer', 'Git', 'React & Tailwind'].map((skill) => (
          <span
            key={skill}
            className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-md text-xs font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Education;

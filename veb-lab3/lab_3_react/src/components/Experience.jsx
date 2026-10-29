function Experience() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4">
        Досвід та технічні проєкти
      </h2>
      <div className="space-y-4">
        <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-blue-600 hover:scale-[1.01] transition">
          <h3 className="font-bold text-lg text-slate-900">Адміністрування HomeLab & Docker</h3>
          <p className="text-slate-600 text-sm mt-1">
            Налаштування Ubuntu Server, контейнеризація сервісів через Docker та Portainer, моніторинг ресурсів за допомогою Netdata та захищена маршрутизація через Tailscale.
          </p>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-indigo-600 hover:scale-[1.01] transition">
          <h3 className="font-bold text-lg text-slate-900">Аудит вразливостей та Hardware Security</h3>
          <p className="text-slate-600 text-sm mt-1">
            Розробка Python-скриптів для перевірки пакетів Linux за базою NVD CVE. Проєктування портативного пристрою на базі мікроконтролера ESP32-S3 (CC1101, NFC).
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;

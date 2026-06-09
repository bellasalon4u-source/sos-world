"use client";

import { useMemo, useState } from "react";
import SosGlobe from "../components/SosGlobe";
import BottomNav from "../components/BottomNav";
import {
  Heart,
  Globe2,
  ShieldCheck,
  Users,
  PawPrint,
  ArrowRight,
  Languages,
  Flame,
  MapPin,
  Camera,
  Radio,
  Sparkles
} from "lucide-react";

const languages = [
  { code: "EN", label: "English" },
  { code: "RU", label: "Русский" },
  { code: "UK", label: "Українська" },
  { code: "ES", label: "Español" },
  { code: "CS", label: "Čeština" },
  { code: "PL", label: "Polski" },
  { code: "DE", label: "Deutsch" },
  { code: "IT", label: "Italiano" },
  { code: "AR", label: "العربية" },
  { code: "HI", label: "हिन्दी" }
];

const content = {
  EN: {
    badge: "Live global help map",
    title: "Help people and animals in real crisis.",
    subtitle:
      "SOS is a global humanitarian platform with verified cases, crisis cards, donations, volunteers and transparent reports.",
    button: "Start helping",
    globe: "Live SOS Crisis Map",
    urgent: "Urgent cases",
    raised: "Raised",
    donate: "Donate",
    cases: "Cases",
    countries: "Countries",
    helpers: "Helpers",
    feed: "Live crisis feed",
    verified: "Verified humanitarian case",
    multilingualTitle: "Global multilingual platform",
    multilingualText:
      "SOS supports interface translations, auto-translated case descriptions, country pages, donor updates and volunteer messages."
  },
  RU: {
    badge: "Живая карта помощи",
    title: "Помогай людям и животным в настоящих кризисах.",
    subtitle:
      "SOS — глобальная гуманитарная платформа с проверенными кейсами, донатами, волонтёрами и прозрачной отчётностью.",
    button: "Начать помогать",
    globe: "Живая карта кризисов SOS",
    urgent: "Срочные кейсы",
    raised: "Собрано",
    donate: "Помочь",
    cases: "Кейсы",
    countries: "Страны",
    helpers: "Помощники",
    feed: "Живая лента кризисов",
    verified: "Проверенный гуманитарный кейс",
    multilingualTitle: "Глобальная мультиязычная платформа",
    multilingualText:
      "SOS поддерживает перевод интерфейса, авто-перевод описаний кейсов, страниц стран, обновлений для доноров и сообщений волонтёров."
  },
  UK: {
    badge: "Жива карта допомоги",
    title: "Допомагай людям і тваринам у реальних кризах.",
    subtitle:
      "SOS — глобальна гуманітарна платформа з перевіреними кейсами, донатами, волонтерами та прозорою звітністю.",
    button: "Почати допомагати",
    globe: "Жива карта криз SOS",
    urgent: "Термінові кейси",
    raised: "Зібрано",
    donate: "Допомогти",
    cases: "Кейси",
    countries: "Країни",
    helpers: "Помічники",
    feed: "Жива стрічка криз",
    verified: "Перевірений гуманітарний кейс",
    multilingualTitle: "Глобальна багатомовна платформа",
    multilingualText:
      "SOS підтримує переклад інтерфейсу, авто-переклад описів кейсів, сторінок країн, оновлень для донорів і повідомлень волонтерів."
  },
  ES: {
    badge: "Mapa global de ayuda",
    title: "Ayuda a personas y animales en crisis reales.",
    subtitle:
      "SOS es una plataforma humanitaria global con casos verificados, donaciones, voluntarios e informes transparentes.",
    button: "Empezar a ayudar",
    globe: "Mapa de crisis SOS en vivo",
    urgent: "Casos urgentes",
    raised: "Recaudado",
    donate: "Donar",
    cases: "Casos",
    countries: "Países",
    helpers: "Ayudantes",
    feed: "Feed de crisis",
    verified: "Caso humanitario verificado",
    multilingualTitle: "Plataforma global multilingüe",
    multilingualText:
      "SOS admite traducciones de interfaz, casos, páginas de países, actualizaciones para donantes y mensajes de voluntarios."
  },
  CS: {
    badge: "Živá mapa pomoci",
    title: "Pomáhej lidem a zvířatům ve skutečných krizích.",
    subtitle:
      "SOS je globální humanitární platforma s ověřenými případy, dary, dobrovolníky a transparentními reporty.",
    button: "Začít pomáhat",
    globe: "Živá krizová mapa SOS",
    urgent: "Naléhavé případy",
    raised: "Vybráno",
    donate: "Darovat",
    cases: "Případy",
    countries: "Země",
    helpers: "Pomocníci",
    feed: "Živý krizový feed",
    verified: "Ověřený humanitární případ",
    multilingualTitle: "Globální vícejazyčná platforma",
    multilingualText:
      "SOS podporuje překlad rozhraní, popisů případů, stránek zemí, zpráv pro dárce a zpráv dobrovolníků."
  },
  PL: {
    badge: "Globalna mapa pomocy",
    title: "Pomagaj ludziom i zwierzętom w prawdziwych kryzysach.",
    subtitle:
      "SOS to globalna platforma humanitarna ze zweryfikowanymi sprawami, darowiznami, wolontariuszami i przejrzystymi raportami.",
    button: "Zacznij pomagać",
    globe: "Mapa kryzysów SOS",
    urgent: "Pilne sprawy",
    raised: "Zebrano",
    donate: "Wesprzyj",
    cases: "Sprawy",
    countries: "Kraje",
    helpers: "Pomocnicy",
    feed: "Kanał kryzysowy",
    verified: "Zweryfikowana sprawa humanitarna",
    multilingualTitle: "Globalna platforma wielojęzyczna",
    multilingualText:
      "SOS obsługuje tłumaczenia interfejsu, opisów spraw, stron krajów, aktualizacji dla darczyńców i wiadomości wolontariuszy."
  },
  DE: {
    badge: "Globale Hilfekarte",
    title: "Hilf Menschen und Tieren in echten Krisen.",
    subtitle:
      "SOS ist eine globale humanitäre Plattform mit verifizierten Fällen, Spenden, Freiwilligen und transparenten Berichten.",
    button: "Jetzt helfen",
    globe: "Live SOS Krisenkarte",
    urgent: "Dringende Fälle",
    raised: "Gesammelt",
    donate: "Spenden",
    cases: "Fälle",
    countries: "Länder",
    helpers: "Helfer",
    feed: "Live Krisenfeed",
    verified: "Verifizierter humanitärer Fall",
    multilingualTitle: "Globale mehrsprachige Plattform",
    multilingualText:
      "SOS unterstützt Übersetzungen der Oberfläche, Fallbeschreibungen, Länderseiten, Spender-Updates und Freiwilligen-Nachrichten."
  },
  IT: {
    badge: "Mappa globale di aiuto",
    title: "Aiuta persone e animali in crisi reali.",
    subtitle:
      "SOS è una piattaforma umanitaria globale con casi verificati, donazioni, volontari e report trasparenti.",
    button: "Inizia ad aiutare",
    globe: "Mappa crisi SOS live",
    urgent: "Casi urgenti",
    raised: "Raccolto",
    donate: "Dona",
    cases: "Casi",
    countries: "Paesi",
    helpers: "Aiutanti",
    feed: "Feed crisi live",
    verified: "Caso umanitario verificato",
    multilingualTitle: "Piattaforma globale multilingue",
    multilingualText:
      "SOS supporta traduzioni dell’interfaccia, descrizioni dei casi, pagine dei paesi, aggiornamenti per donatori e messaggi dei volontari."
  },
  AR: {
    badge: "خريطة مساعدة عالمية مباشرة",
    title: "ساعد الناس والحيوانات في الأزمات الحقيقية.",
    subtitle:
      "SOS منصة إنسانية عالمية للحالات الموثقة، التبرعات، المتطوعين والتقارير الشفافة.",
    button: "ابدأ المساعدة",
    globe: "خريطة أزمات SOS مباشرة",
    urgent: "حالات عاجلة",
    raised: "تم جمعه",
    donate: "تبرع",
    cases: "حالات",
    countries: "دول",
    helpers: "مساعدون",
    feed: "بث مباشر للأزمات",
    verified: "حالة إنسانية موثقة",
    multilingualTitle: "منصة عالمية متعددة اللغات",
    multilingualText:
      "تدعم SOS ترجمة الواجهة، أوصاف الحالات، صفحات الدول، تحديثات المتبرعين ورسائل المتطوعين."
  },
  HI: {
    badge: "लाइव ग्लोबल हेल्प मैप",
    title: "वास्तविक संकट में लोगों और जानवरों की मदद करें।",
    subtitle:
      "SOS एक वैश्विक मानवीय प्लेटफ़ॉर्म है जिसमें verified cases, donations, volunteers और transparent reports हैं।",
    button: "मदद शुरू करें",
    globe: "Live SOS Crisis Map",
    urgent: "Urgent cases",
    raised: "Raised",
    donate: "Donate",
    cases: "Cases",
    countries: "Countries",
    helpers: "Helpers",
    feed: "Live crisis feed",
    verified: "Verified humanitarian case",
    multilingualTitle: "Global multilingual platform",
    multilingualText:
      "SOS supports interface translations, auto-translated case descriptions, country pages, donor updates and volunteer messages."
  }
};

const crisisCases = [
  {
    title: "Emergency food support",
    place: "Gaza",
    amount: "£12,450",
    tag: "People",
    color: "bg-red-100 text-red-700"
  },
  {
    title: "Rescue animals after floods",
    place: "Ukraine",
    amount: "£8,920",
    tag: "Animals",
    color: "bg-yellow-200 text-black"
  },
  {
    title: "Medical help for children",
    place: "Sudan",
    amount: "£15,300",
    tag: "Health",
    color: "bg-cyan-100 text-cyan-800"
  }
];

const liveFeed = [
  { country: "Ukraine", text: "Animal shelter needs food and medicine", type: "Animals" },
  { country: "Sudan", text: "Medical support requested for children", type: "Health" },
  { country: "Gaza", text: "Emergency food packages verified", type: "People" }
];

export default function Home() {
  const [language, setLanguage] = useState<keyof typeof content>("EN");
  const t = content[language];
  const isRtl = useMemo(() => language === "AR", [language]);

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-[#f8fbff] pb-28 text-[#07111f]"
    >
      <section className="px-5 pt-6 pb-10">
        <header className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-black tracking-tight">SOS</div>
            <div className="mt-1 text-xs font-bold text-slate-500">
              Humanity • Animals • Crisis
            </div>
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as keyof typeof content)}
            className="max-w-[160px] rounded-full border-2 border-black bg-white px-3 py-3 text-sm font-black shadow-[3px_3px_0_#07111f]"
          >
            {languages.map((item) => (
              <option key={item.code} value={item.code}>
                {item.code} — {item.label}
              </option>
            ))}
          </select>
        </header>

        <div className="mt-8 rounded-[2rem] border-2 border-black bg-white p-5 shadow-[8px_8px_0_#07111f]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-black text-red-700">
            <Flame size={16} />
            {t.badge}
          </div>

          <h1 className="text-5xl font-black leading-none tracking-tight">
            {t.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {t.subtitle}
          </p>

          <button
            onClick={() => (window.location.href = "/case")}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-black bg-[#ff3b30] px-5 py-4 text-lg font-black text-white shadow-[4px_4px_0_#07111f]"
          >
            {t.button} <ArrowRight size={22} />
          </button>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[2rem] border-2 border-black bg-[#07111f] p-5 text-white shadow-[8px_8px_0_#07111f]">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-red-500/20 blur-3xl" />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-300">
              <Globe2 />
              <span className="font-black">{t.globe}</span>
            </div>

            <div className="flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-xs font-black">
              <Radio size={13} />
              LIVE
            </div>
          </div>

          <div className="relative mt-6">
            <SosGlobe />
          </div>

          <div className="relative mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
              <div className="text-2xl font-black">142</div>
              <div className="text-xs text-white/70">{t.cases}</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
              <div className="text-2xl font-black">38</div>
              <div className="text-xs text-white/70">{t.countries}</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
              <div className="text-2xl font-black">9k</div>
              <div className="text-xs text-white/70">{t.helpers}</div>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-black">{t.feed}</h2>
            <Sparkles className="text-red-500" />
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {liveFeed.map((item) => (
              <div
                key={item.text}
                className="min-w-[245px] rounded-[1.5rem] border-2 border-black bg-white p-4 shadow-[5px_5px_0_#07111f]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-800">
                    {item.type}
                  </span>
                  <Camera size={18} className="text-slate-500" />
                </div>
                <h3 className="mt-4 text-lg font-black">{item.country}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-4xl font-black">{t.urgent}</h2>

          <div className="mt-4 space-y-4">
            {crisisCases.map((item) => (
              <div
                key={item.title}
                onClick={() => (window.location.href = "/case")}
                className="cursor-pointer rounded-[1.5rem] border-2 border-black bg-white p-4 shadow-[5px_5px_0_#07111f]"
              >
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${item.color}`}>
                    {item.tag}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-bold text-slate-500">
                    <MapPin size={14} />
                    {item.place}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-black">{item.title}</h3>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">{t.raised}</div>
                    <div className="text-2xl font-black">{item.amount}</div>
                  </div>
                  <button className="rounded-xl border-2 border-black bg-[#00c2ff] px-4 py-2 font-black">
                    {t.donate}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-3xl border-2 border-black bg-white p-4">
            <Heart className="text-red-500" />
            <h3 className="mt-3 font-black">Donations</h3>
          </div>
          <div className="rounded-3xl border-2 border-black bg-white p-4">
            <Users className="text-blue-500" />
            <h3 className="mt-3 font-black">Volunteers</h3>
          </div>
          <div className="rounded-3xl border-2 border-black bg-white p-4">
            <PawPrint className="text-orange-500" />
            <h3 className="mt-3 font-black">Animals</h3>
          </div>
          <div className="rounded-3xl border-2 border-black bg-white p-4">
            <ShieldCheck className="text-green-500" />
            <h3 className="mt-3 font-black">Verified</h3>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border-2 border-black bg-yellow-100 p-5">
          <div className="flex items-center gap-2">
            <Languages />
            <h2 className="text-2xl font-black">{t.multilingualTitle}</h2>
          </div>
          <p className="mt-3 text-slate-700">{t.multilingualText}</p>
        </section>
      </section>

      <BottomNav />
    </main>
  );
}

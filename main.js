document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initI18n();
  initAmbientCanvas();
  initScrollProgress();
  initMobileMenu();
  initTypewriter();
  initScrollAnimations();
  initMetricCounters();
  init3DTilt();
  initProjectCardLinks();
  initCostCalculator();
  initFaqAccordion();
  initContactForm();
  initBackToTop();
});

const translations = {
  ru: {
    nav_about: "Обо мне",
    nav_skills: "Стек",
    nav_experience: "Опыт",
    nav_projects: "Кейсы",
    nav_calc: "Калькулятор",
    nav_faq: "FAQ",
    btn_contact: "Связаться",
    hero_badge: "Статус: открыт к проектам",
    hero_title_1: "FULL-STACK",
    hero_title_2: "РАЗРАБОТЧИК.",
    hero_subtitle:
      "Разрабатываю надежные веб-сервисы, архитектуру баз данных на C# и SQL, а также современные интерфейсы в Figma. От идеи и прототипа до продакшена.",
    btn_projects: "Смотреть кейсы ↗",
    btn_resume: "Резюме (PDF)",
    trust_diploma: "Красный диплом (ВоГУ)",
    trust_grant_val: "694K",
    trust_grant: "Победитель федерального гранта",
    trust_exp: "Года коммерческой разработки",
    trust_deadline: "Соблюдение сроков и дедлайнов",
    about_title: "Обо мне",
    about_lead:
      "Инженер-разработчик с красным дипломом ВоГУ, победой в инновационном гранте на 694 000 ₽ и опытом оптимизации промышленных баз данных.",
    about_sub:
      "Объединяю надежность enterprise-технологий C# / .NET с конверсионным UI/UX дизайном в Figma. Реализую проекты под ключ без лишних звеньев и технического долга.",
    auth_card_1_title: "Enterprise & Промышленные БД",
    auth_card_1_desc:
      "Опыт в SSMS и PostgreSQL на производстве (ВПЗ, Акатан), ускорение сложных запросов к БД до 25%.",
    auth_card_2_title: "Full-Cycle в одних руках",
    auth_card_2_desc:
      "От интерактивного прототипа в Figma до серверной логики .NET и быстрого фронтенда без переплат агентствам.",
    auth_card_3_title: "Договор, Git и гарантия 30 дней",
    auth_card_3_desc:
      "Официальный договор, чеки, ежедневный контроль в Git и бесплатная техническая поддержка после сдачи.",
    skills_title: "Стек",
    skill_card_1_title: "Backend & Systems",
    skill_card_1_desc:
      "Проектирование надежного серверного кода, реляционных баз данных и системных настольных приложений.",
    skill_card_2_title: "Frontend Engine",
    skill_card_2_desc:
      "Адаптивная кроссбраузерная верстка, высокая скорость загрузки и микроинтеракции без раздутых библиотек.",
    skill_card_3_title: "UI/UX & Media Tools",
    skill_card_3_desc:
      "Дизайн-системы в Figma с Auto-Layout, графика в Photoshop и Illustrator, 3D в Vectary и запуск под ключ на Tilda.",
    exp_title: "Опыт",
    exp_1_date: "Дек 2025 - Май 2026",
    exp_1_role: "Специалист по информационным системам",
    exp_1_desc:
      "Декомпозиция требований и модульная разработка. Написание SQL-скриптов с повышением производительности запросов к БД на 20%. Бесшовная синхронизация компонентов с бэкенд-командой.",
    exp_2_date: "Июнь 2025 - Сент 2025",
    exp_2_role: "Техник по базам данных",
    exp_2_desc:
      "Проектирование логических схем промышленных баз данных, снижение избыточности на 10% за счет нормализации. Оптимизация SQL-запросов в среде SSMS с ускорением обработки данных на 25%.",
    exp_3_date: "Май 2024 - Июнь 2025",
    exp_3_role: "Веб-разработчик (Full-cycle)",
    exp_3_desc:
      "Проектирование UI/UX в Figma (ускорение согласования с заказчиками на 25%). Адаптивная и кроссбраузерная верстка, интеграция контента, рост вовлеченности аудитории на 15%.",
    exp_4_date: "2023 - 2024",
    exp_4_role: "Руководитель проекта (Грант 694 000 ₽)",
    exp_4_desc:
      "Победитель федерального конкурса инновационных грантов. Руководство полным циклом разработки прикладного программного обеспечения на платформе .NET.",
    projects_title: "Кейсы",
    badge_open_site: "Открыть сайт ↗",
    badge_open_repo: "Открыть репозиторий ↗",
    proj_1_name: "Наталья Кочуланова",
    proj_1_desc:
      "Премиальное портфолио для графического и UI/UX дизайнера с 20-летним опытом. Архитектурная швейцарская типографика, презентация кейсов и высокая скорость загрузки.",
    proj_2_name: "VIKA.ART : Креативный 3D Арт",
    proj_2_desc:
      "Промо-лендинг для студии эксклюзивного маникюра. Сложные 3D-формы, стилистика жидкого металла, неоновые акценты и конверсионный прайс-лист.",
    proj_3_name: "Строй-Альянс",
    proj_3_desc:
      "Корпоративный портал для девелоперской компании премиум-сегмента. Строгий дизайн в глубоких темных тонах, блочная верстка Zero Block и адаптив.",
    proj_4_name: "Monte-Cristo RPG",
    proj_4_desc:
      "Дипломный проект. Полноценная 2D top-down 16-bit RPG на Unity 6. Архитектура игровых циклов на C#, инвентарь, искусственный интеллект NPC и анимации.",
    calc_title: "Калькулятор",
    calc_subtitle:
      "Параметры и стек проекта с расчетом бюджета и сроков под текущие требования.",
    calc_label_1: "1. Тип цифрового продукта:",
    type_landing: "Лендинг под ключ",
    type_corp: "Корпоративный сайт",
    type_service: "Веб-сервис / Бэкенд",
    type_figma: "UI/UX дизайн в Figma",
    calc_label_2: "2. Дополнительные опции:",
    opt_anim: "Сложные микроанимации и Canvas-интерактив",
    opt_back: "Серверная обработка, БД и почтовые уведомления",
    opt_speed: "Срочный запуск проекта (Turbo-спринт)",
    calc_budget_label: "Ориентировочный бюджет:",
    calc_time_label: "Срок реализации:",
    calc_apply_btn: "Зафиксировать условия в заявке",
    faq_title: "FAQ",
    faq_q1: "Как строится процесс взаимодействия над проектом?",
    faq_q2: "С каким стеком вы работаете в коммерческих задачах?",
    faq_q3: "Передаются ли исходники и права заказчику?",
    faq_a3:
      "Да, абсолютно все права, макеты Figma, исходный чистый код в Git-репозитории и инструкции по развертыванию передаются вам в полном объеме после сдачи проекта.",
    faq_q4: "Возможна ли работа по договору?",
    faq_a4:
      "Да, официальное оформление через самозанятость с формированием фискальных чеков либо договор подряда с актами приема-передачи работ.",
    contact_title: "Готовы запустить проект? Давайте обсудим задачу.",
    contact_lead:
      "Оставьте заявку через форму или напишите напрямую на почту и в Telegram. Быстрый ответ с оценкой сроков и архитектуры.",
    form_name_label: "Ваше имя / Компания *",
    form_contact_label: "Телефон или Email *",
    form_msg_label: "Детали задачи / Результаты калькулятора",
    form_submit_btn: "Отправить заявку ↗",
    form_privacy:
      "Конфиденциальность гарантируется. Данные используются исключительно для обратной связи.",
    direct_contacts_title: "Прямые каналы связи",
    contact_phone_label: "ТЕЛЕФОН",
  },
  en: {
    nav_about: "About",
    nav_skills: "Stack",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_calc: "Estimator",
    nav_faq: "FAQ",
    btn_contact: "Contact",
    hero_badge: "Status: available for hire",
    hero_title_1: "FULL-STACK",
    hero_title_2: "DEVELOPER.",
    hero_subtitle:
      "Engineering fault-tolerant backend solutions in C# and SQL. Crafting conversion-driven interfaces in Figma and writing clean, scalable code.",
    btn_projects: "Explore Works ↗",
    btn_resume: "Resume (PDF)",
    trust_diploma: "Honours Degree (VoGU)",
    trust_grant_val: "694K",
    trust_grant: "National Grant Lead",
    trust_exp: "Years Commercial Exp.",
    trust_deadline: "On-Time Delivery Guarantee",
    about_title: "About Me",
    about_lead:
      "Software engineer with a VoGU Honours Degree, 694,000 RUB innovation grant award, and hands-on industrial database optimization track record.",
    about_sub:
      "I merge resilient enterprise C# / .NET architecture with conversion-focused Figma UI/UX design. Delivering turnkey web products without intermediaries or technical debt.",
    auth_card_1_title: "Enterprise & Industrial DB",
    auth_card_1_desc:
      "Production-grade SSMS and PostgreSQL optimization on manufacturing setups with up to 25% query speedup.",
    auth_card_2_title: "Full-Cycle in One Hands",
    auth_card_2_desc:
      "From high-fidelity interactive Figma systems to .NET backend architecture and lightweight frontend without agency markups.",
    auth_card_3_title: "Formal Contract, Git & 30-Day Warranty",
    auth_card_3_desc:
      "Transparent agreements, invoice compliance, continuous Git delivery, and dedicated 30-day post-launch technical warranty.",
    skills_title: "Tech Stack",
    skill_card_1_title: "Backend & Systems",
    skill_card_1_desc:
      "High-load backend development, relational database modeling, and desktop software.",
    skill_card_2_title: "Frontend Engine",
    skill_card_2_desc:
      "Accessible semantic HTML5, modern CSS3 layouts, and vanilla ES6+ interactions.",
    skill_card_3_title: "UI/UX & Media Tools",
    skill_card_3_desc:
      "Production Figma design systems, Photoshop, Illustrator, Vectary 3D, and turnkey Tilda implementation.",
    exp_title: "Experience",
    exp_1_date: "Dec 2025 - May 2026",
    exp_1_role: "Information Systems Specialist",
    exp_1_desc:
      "Industrial database optimization, complex SQL query profiling (+20% query performance), corporate system resilience, and process automation.",
    exp_2_date: "Jun 2025 - Sep 2025",
    exp_2_role: "Database Systems Technician",
    exp_2_desc:
      "Logical schema modeling, data normalization (-10% redundancy), and SQL query execution profiling in SSMS (+25% retrieval speed).",
    exp_3_date: "May 2024 - Jun 2025",
    exp_3_role: "Full-Cycle Web Developer",
    exp_3_desc:
      "Turnkey commercial web development, component architecture in Figma (+25% client approval speed), cross-browser semantic coding, and user engagement growth.",
    exp_4_date: "2023 - 2024",
    exp_4_role: "Federal Grant Project Lead",
    exp_4_desc:
      "Winner of the national innovation grant (694,000 RUB). End-to-end management of software product built on the .NET ecosystem.",
    projects_title: "Projects",
    badge_open_site: "Open Site ↗",
    badge_open_repo: "Open Repository ↗",
    proj_1_name: "Natalia Kochulanova",
    proj_1_desc:
      "High-end design portfolio for a UI/UX expert with 20 years in industry. Strict Swiss grid, identity presentation, and high performance.",
    proj_2_name: "VIKA.ART : Cyberpunk 3D Art",
    proj_2_desc:
      "Futuristic visual landing page for a boutique nail art atelier. Cyberpunk styling, liquid metal 3D renders, and an interactive price book.",
    proj_3_name: "Stroy-Alliance",
    proj_3_desc:
      "Corporate portal for a luxury real estate development group. Elegant dark-palette UI, Zero Block responsive layouts, and lead hooks.",
    proj_4_name: "Monte-Cristo RPG",
    proj_4_desc:
      "Full-fledged 2D top-down 16-bit RPG built on Unity 6. Complex C# state machines, NPC artificial intelligence, and inventory management.",
    calc_title: "Estimator",
    calc_subtitle:
      "Instant project cost and timeline estimation tailored to modern commercial standards.",
    calc_label_1: "1. Digital Product Scope:",
    type_landing: "Turnkey Landing Page",
    type_corp: "Corporate Portal",
    type_service: "Web Platform / Backend",
    type_figma: "UI/UX Figma System",
    calc_label_2: "2. Optional Upgrades:",
    opt_anim: "Bespoke micro-animations and Canvas visualizers",
    opt_back: "Custom backend API, database and email notification flow",
    opt_speed: "Priority Turbo Sprint delivery",
    calc_budget_label: "Estimated Investment:",
    calc_time_label: "Delivery Timeline:",
    calc_apply_btn: "Transfer Scope to Inquiry Form",
    faq_title: "FAQ",
    faq_q1: "What does the typical development workflow look like?",
    faq_q2: "What technologies power your projects?",
    faq_q3: "Do I receive full ownership and source code?",
    faq_a3:
      "Yes. 100% intellectual property, Figma design files, clean Git repositories, and documentation belong to you upon final handover.",
    faq_q4: "Are formal service agreements available?",
    faq_a4:
      "Yes, contracts with formal invoicing, tax compliance, and mutual acceptance certificates are available.",
    contact_title: "Ready to launch? Let's discuss your project.",
    contact_lead:
      "Fill out the contact form or send a message directly via email or Telegram. Typical response time is under 30 minutes.",
    form_name_label: "Your Name / Organization *",
    form_contact_label: "Phone or Email *",
    form_msg_label: "Project Scope / Calculated Requirements",
    form_submit_btn: "Send Inquiry ↗",
    form_privacy:
      "Strict confidentiality guaranteed. Your details are used solely to establish project communication.",
    direct_contacts_title: "Direct Channels",
    contact_phone_label: "PHONE",
  },
  de: {
    nav_about: "Über mich",
    nav_skills: "Stack",
    nav_experience: "Erfahrung",
    nav_projects: "Projekte",
    nav_calc: "Kalkulator",
    nav_faq: "FAQ",
    btn_contact: "Kontakt",
    hero_badge: "Status: verfügbar für Projekte",
    hero_title_1: "FULL-STACK",
    hero_title_2: "ENTWICKLER.",
    hero_subtitle:
      "Entwicklung robuster Backend-Lösungen mit C# und SQL. Gestaltung konversionsstarker Interfaces in Figma und sauberer Quellcode.",
    btn_projects: "Projekte Ansehen ↗",
    btn_resume: "Lebenslauf (PDF)",
    trust_diploma: "Abschluss mit Auszeichnung (VoGU)",
    trust_grant_val: "694K",
    trust_grant: "Projektleiter Förderprojekt",
    trust_exp: "Jahre Berufserfahrung",
    trust_deadline: "100% Termintreue",
    about_title: "Über mich",
    about_lead:
      "IT-Ingenieur mit Auszeichnung (VoGU), Gewinner des Innovationsförderprogramms (694.000 RUB) und Praxis in industrieller Datenbankoptimierung.",
    about_sub:
      "Ich kombiniere belastbare C# / .NET Enterprise-Architektur mit konvertierendem Figma UI/UX Design. Maßgeschneiderte Webprodukte ohne Zwischenhändler und Altlasten.",
    auth_card_1_title: "Enterprise & Industrie-Datenbanken",
    auth_card_1_desc:
      "SSMS- und PostgreSQL-Optimierung in Industriebetrieben mit bis zu 25% schnellerer Datenverarbeitung.",
    auth_card_2_title: "Full-Cycle aus einer Hand",
    auth_card_2_desc:
      "Vom interaktiven Figma-Prototyp bis zur .NET Backend-Architektur und schlankem Frontend ohne Agenturaufschläge.",
    auth_card_3_title: "Vertrag, Git & 30 Tage Garantie",
    auth_card_3_desc:
      "Rechtssichere Verträge, fortlaufende Git-Übergabe und 30 Tage kostenlose technische Garantie nach Veröffentlichung.",
    skills_title: "Stack",
    skill_card_1_title: "Backend & Systeme",
    skill_card_1_desc:
      "Modellierung von relationalen Datenbanken, Systemsoftware und APIs mit C# und SQL.",
    skill_card_2_title: "Frontend Engine",
    skill_card_2_desc:
      "Semantisches HTML5, performantes CSS und Vanilla ES6+ Interaktionen ohne Überladung.",
    skill_card_3_title: "UI/UX & Media Tools",
    skill_card_3_desc:
      "Design-Systeme in Figma, Photoshop, Illustrator, Vectary 3D und fertige Tilda Zero Block Umsetzungen.",
    exp_title: "Erfahrung",
    exp_1_date: "Dez 2025 - Mai 2026",
    exp_1_role: "Spezialist für Informationssysteme",
    exp_1_desc:
      "Optimierung von Produktionsdatenbanken, SQL-Refactoring (+20% Abfrageleistung), Prozessautomatisierung und Backend-Integration.",
    exp_2_date: "Jun 2025 - Sep 2025",
    exp_2_role: "Techniker für Datenbanksysteme",
    exp_2_desc:
      "Logische Datenbankschemata, Daten-Normalisierung (-10% Redundanz) und SQL-Optimierung in SSMS (+25% Verarbeitungsgeschwindigkeit).",
    exp_3_date: "Mai 2024 - Jun 2025",
    exp_3_role: "Webentwickler (Full-Cycle)",
    exp_3_desc:
      "Entwicklung schlüsselfertiger Webseiten, Komponenten-Design in Figma (+25% Freigabegeschwindigkeit), Cross-Browser-Layouts und Engagement-Wachstum.",
    exp_4_date: "2023 - 2024",
    exp_4_role: "Projektleiter (694.000 RUB Förderung)",
    exp_4_desc:
      "Gewinner des nationalen Innovationsförderprogramms. Leitung des Entwicklungszyklus auf .NET-Basis.",
    projects_title: "Projekte",
    badge_open_site: "Website Öffnen ↗",
    badge_open_repo: "Repository Öffnen ↗",
    proj_1_name: "Natalia Kochulanova",
    proj_1_desc:
      "Portfolio für eine UI/UX-Designerin mit 20 Jahren Erfahrung. Klare Schweizer Typografie und schnelle Ladezeiten.",
    proj_2_name: "VIKA.ART : 3D Cyber Art",
    proj_2_desc:
      "Futuristische Promo-Landingpage für ein 3D-Nailart-Studio mit Cyberpunk-Ästhetik und digitaler Preisliste.",
    proj_3_name: "Stroy-Alliance",
    proj_3_desc:
      "Unternehmensportal для девелоперской компании премиум-сегмента. Строгий дизайн в глубоких темных тонах, блочная верстка Zero Block и адаптив.",
    proj_4_name: "Monte-Cristo RPG",
    proj_4_desc:
      "Дипломный проект. Полноценная 2D top-down 16-bit RPG на Unity 6. Архитектура игровых циклов на C#, инвентарь, искусственный интеллект NPC и анимации.",
    calc_title: "Kalkulator",
    calc_subtitle: "Kosten- und Zeitaufwand für Ihr Digitalprojekt.",
    calc_label_1: "1. Produktkategorie:",
    type_landing: "Schlüsselfertige Landingpage",
    type_corp: "Unternehmensportal",
    type_service: "Web-Plattform / Backend",
    type_figma: "UI/UX Figma System",
    calc_label_2: "2. Zusatzoptionen:",
    opt_anim: "Individuelle Animationen & Canvas-Effekte",
    opt_back: "Server-Backend, Datenbank & Benachrichtigungen",
    opt_speed: "Express-Entwicklung (Turbo-Sprint)",
    calc_budget_label: "Kalkulierter Richtwert:",
    calc_time_label: "Umsetzungsdauer:",
    calc_apply_btn: "Kalkulation in Formular Übernehmen",
    faq_title: "FAQ",
    faq_q1: "Wie läuft die Zusammenarbeit ab?",
    faq_q2: "Welche Technologien setzen Sie ein?",
    faq_q3: "Gehören Quellcode und Rechte mir?",
    faq_a3:
      "Ja. Nach Projektabschluss erhalten Sie alle Rechte, Figma-Dateien, Git-Repositories und Dokumentationen uneingeschränkt.",
    faq_q4: "Ist eine vertragliche Vereinbarung möglich?",
    faq_a4:
      "Ja, die Abwicklung erfolgt auf offizieller Basis mit Rechnungsstellung und Leistungsnachweis.",
    contact_title:
      "Bereit für den Start? Lassen Sie uns das Projekt besprechen.",
    contact_lead:
      "Senden Sie eine Anfrage oder schreiben Sie direkt per E-Mail oder Telegram. Schnelle Rückmeldung garantiert.",
    form_name_label: "Ihr Name / Firma *",
    form_contact_label: "Telefon oder E-Mail *",
    form_msg_label: "Projektanforderungen / Kalkulation",
    form_submit_btn: "Anfrage Senden ↗",
    form_privacy:
      "Vertraulichkeit garantiert. Ihre Angaben werden ausschließlich zur Projektanfrage verwendet.",
    direct_contacts_title: "Direkte Kanäle",
    contact_phone_label: "TELEFON",
  },
};

const checklistsData = {
  landing: {
    ru: [
      "Маркетинговый анализ и прототип структуры",
      "Индивидуальный дизайн в Figma (ПК + Mobile)",
      "Адаптивная верстка (320px - 2560px)",
      "Настройка форм и базовое SEO",
    ],
    en: [
      "Target audience analysis and structure wireframe",
      "Custom responsive Figma UI (Desktop + Mobile)",
      "Semantic responsive coding (320px - 2560px)",
      "Lead capture setup and fundamental SEO",
    ],
    de: [
      "Zielgruppenanalyse und Wireframe-Erstellung",
      "Individuelles Design in Figma (Desktop & Mobile)",
      "Responsive Umsetzung (320px - 2560px)",
      "Lead-Formulare und grundlegende SEO",
    ],
  },
  corporate: {
    ru: [
      "Многостраничная архитектура (до 7 страниц)",
      "Каталог услуг/кейсов и модульная верстка",
      "Оптимизация скорости 90+ в Google PageSpeed",
      "Интеграция с корпоративной почтой",
    ],
    en: [
      "Multi-page architecture (up to 7 key pages)",
      "Services/portfolio catalog with modular layout",
      "Google PageSpeed 90+ load time optimization",
      "Corporate email integration",
    ],
    de: [
      "Mehrseitige Struktur (bis zu 7 Einzelseiten)",
      "Leistungskatalog mit modularem Aufbau",
      "PageSpeed 90+ Ladezeit-Optimierung",
      "E-Mail-Anbindung",
    ],
  },
  service: {
    ru: [
      "Проектирование базы данных (SQL Server / PostgreSQL)",
      "Серверная архитектура на C# .NET или PHP 8+",
      "Защищенный REST API и авторизация пользователей",
      "Техническая документация и инструкция по развертыванию",
    ],
    en: [
      "Relational DB schema (SQL Server / PostgreSQL)",
      "Backend architecture on C# .NET or PHP 8+",
      "Secure REST API endpoints & user auth",
      "Technical architecture documentation & deploy guide",
    ],
    de: [
      "Relationale Datenbankmodellierung (SQL / Postgres)",
      "Backend-Entwicklung mit C# .NET oder PHP 8+",
      "Sichere REST API und Authentifizierung",
      "Technische Dokumentation und Deployment-Plan",
    ],
  },
  figma: {
    ru: [
      "Интерактивный кликабельный прототип системы",
      "Полноценная дизайн-система с Auto-Layout",
      "Сетка компонентов и стилей (шрифты, цвета, UI-Kit)",
      "Подготовка исходников к передаче в разработку",
    ],
    en: [
      "Clickable interactive high-fidelity prototype",
      "Scalable design system powered by Auto-Layout",
      "Design tokens, responsive typography & UI-kit",
      "Developer handoff documentation & export assets",
    ],
    de: [
      "Interaktiver und klickbarer Prototyp",
      "Skalierbares Figma Design-System mit Auto-Layout",
      "Komponenten-Bibliothek und Design-Tokens",
      "Vollständige Entwickler-Übergabe",
    ],
  },
};

let currentLang = "ru";

function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  const toggleBtnMobile = document.getElementById("themeToggleMobile");
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  function toggle() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  if (toggleBtn) toggleBtn.addEventListener("click", toggle);
  if (toggleBtnMobile) toggleBtnMobile.addEventListener("click", toggle);
}

function initI18n() {
  const savedLang = localStorage.getItem("lang") || "ru";
  setLanguage(savedLang);

  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang");
      setLanguage(targetLang);
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  window.dispatchEvent(new CustomEvent("langchange"));
}

function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const dots = [];
  const spacing = 38;
  const mouse = { x: -1000, y: -1000, radius: 140 };

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createDots();
  });

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  function createDots() {
    dots.length = 0;
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        dots.push({
          originX: x,
          originY: y,
          x: x,
          y: y,
          size: 1.2,
        });
      }
    }
  }

  createDots();

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const isLight =
      document.documentElement.getAttribute("data-theme") === "light";

    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i];
      const dx = mouse.x - dot.x;
      const dy = mouse.y - dot.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius) {
        const angle = Math.atan2(dy, dx === 0 ? 0.001 : dx);
        const force = (mouse.radius - dist) / mouse.radius;
        const pushX = Math.cos(angle) * force * 16;
        const pushY = Math.sin(angle) * force * 16;
        dot.x = dot.originX - pushX;
        dot.y = dot.originY - pushY;
        ctx.fillStyle = isLight
          ? "rgba(104, 114, 77, 0.7)"
          : "rgba(147, 155, 118, 0.6)";
      } else {
        dot.x += (dot.originX - dot.x) * 0.08;
        dot.y += (dot.originY - dot.y) * 0.08;
        ctx.fillStyle = isLight
          ? "rgba(0, 0, 0, 0.08)"
          : "rgba(255, 255, 255, 0.08)";
      }

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

function initScrollProgress() {
  const progressBar = document.getElementById("progressBar");
  const header = document.getElementById("header");

  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }

      if (header) {
        header.classList.toggle("scrolled", scrollTop > 20);
      }
    },
    { passive: true },
  );
}

function initMobileMenu() {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (!burgerBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add("open");
    burgerBtn.classList.add("open");
    burgerBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    burgerBtn.classList.remove("open");
    burgerBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  burgerBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      closeMenu();
    }
  });
}

function initTypewriter() {
  const target = document.getElementById("typewriter");
  if (!target) return;

  const roles = [
    "C# & .NET Systems Architecture",
    "Conversion-Driven UI/UX in Figma",
    "High-Performance SQL & Database Eng.",
    "Clean Vanilla ES6+ & Zero Technical Debt",
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 65;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 30;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 350;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

function initScrollAnimations() {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(
            entry.target.getAttribute("data-delay") || "0",
            10,
          );
          setTimeout(() => {
            entry.target.classList.add("in-view");
          }, delay);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}

function initMetricCounters() {
  const counterElements = document.querySelectorAll(".counter-val");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseFloat(entry.target.getAttribute("data-target"));
          const decimals = parseInt(
            entry.target.getAttribute("data-decimals") || "0",
            10,
          );
          const duration = 1400;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOut * target;

            entry.target.textContent =
              decimals > 0
                ? currentVal.toFixed(decimals)
                : Math.floor(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              entry.target.textContent =
                decimals > 0 ? target.toFixed(decimals) : target;
            }
          }

          requestAnimationFrame(updateCounter);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  counterElements.forEach((el) => observer.observe(el));
}

function init3DTilt() {
  if (window.innerWidth < 992) return;

  const tiltCards = document.querySelectorAll(".tilt-card");

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

function initProjectCardLinks() {
  const projectCards = document.querySelectorAll(
    ".project-card[data-project-url]",
  );

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const url = card.getAttribute("data-project-url");
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    });
  });
}

function initCostCalculator() {
  const typeChips = document.querySelectorAll("#calcType .calc-chip");
  const optAnim = document.getElementById("optAnimations");
  const optBack = document.getElementById("optBackend");
  const optSpeed = document.getElementById("optSpeed");
  const priceDisplay = document.getElementById("calcPriceDisplay");
  const daysDisplay = document.getElementById("calcDaysDisplay");
  const checklistEl = document.getElementById("calcChecklist");
  const applyBtn = document.getElementById("calcApplyBtn");
  const userMessage = document.getElementById("userMessage");
  const summaryCard = document.querySelector(".summary-card");

  if (!priceDisplay || !daysDisplay || !checklistEl) return;

  let currentType = "landing";
  let basePrice = 19000;
  let baseDays = 5;
  let lastPrice = 32000;

  function renderChecklist() {
    const list =
      (checklistsData[currentType] &&
        checklistsData[currentType][currentLang]) ||
      checklistsData[currentType].ru;
    checklistEl.innerHTML = "";
    list.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      checklistEl.appendChild(li);
    });
  }

  function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeProgress);
      element.textContent = `${current.toLocaleString("ru-RU")} ₽`;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = `${end.toLocaleString("ru-RU")} ₽`;
      }
    }
    requestAnimationFrame(step);
  }

  function calculateTotal() {
    let totalCost = basePrice;
    let totalDays = baseDays;

    if (optAnim && optAnim.checked) {
      totalCost += parseInt(optAnim.getAttribute("data-cost") || "0", 10);
      totalDays += parseInt(optAnim.getAttribute("data-days") || "0", 10);
    }
    if (optBack && optBack.checked) {
      totalCost += parseInt(optBack.getAttribute("data-cost") || "0", 10);
      totalDays += parseInt(optBack.getAttribute("data-days") || "0", 10);
    }
    if (optSpeed && optSpeed.checked) {
      totalCost += parseInt(optSpeed.getAttribute("data-cost") || "0", 10);
      totalDays += parseInt(optSpeed.getAttribute("data-days") || "0", 10);
    }

    if (totalDays < 3) totalDays = 3;

    if (summaryCard) {
      summaryCard.classList.remove("pulse-glow");
      void summaryCard.offsetWidth;
      summaryCard.classList.add("pulse-glow");
    }

    animateNumber(priceDisplay, lastPrice, totalCost, 400);
    lastPrice = totalCost;

    if (currentLang === "en") {
      daysDisplay.textContent = `~${totalDays} business days`;
    } else if (currentLang === "de") {
      daysDisplay.textContent = `~${totalDays} Arbeitstage`;
    } else {
      daysDisplay.textContent = `~${totalDays} рабочих дней`;
    }

    renderChecklist();
    return { totalCost, totalDays, currentType };
  }

  typeChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      typeChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      currentType = chip.getAttribute("data-type") || "landing";
      basePrice = parseInt(chip.getAttribute("data-cost") || "0", 10);
      baseDays = parseInt(chip.getAttribute("data-days") || "0", 10);
      calculateTotal();
    });
  });

  [optAnim, optBack, optSpeed].forEach((checkbox) => {
    if (checkbox) checkbox.addEventListener("change", calculateTotal);
  });

  window.addEventListener("langchange", calculateTotal);

  calculateTotal();

  if (applyBtn && userMessage) {
    applyBtn.addEventListener("click", () => {
      const activeChip = document.querySelector("#calcType .calc-chip.active");
      const typeName = activeChip ? activeChip.textContent.trim() : currentType;
      const { totalCost, totalDays } = calculateTotal();

      if (currentLang === "en") {
        userMessage.value = `Hello Theodore! I'm interested in: ${typeName}. Estimated budget: ${totalCost.toLocaleString("ru-RU")} RUB, timeline: ~${totalDays} days. Let's discuss requirements.`;
      } else if (currentLang === "de") {
        userMessage.value = `Hallo Theodore! Ich interessiere mich für: ${typeName}. Geschätztes Budget: ${totalCost.toLocaleString("ru-RU")} RUB, Dauer: ~${totalDays} Tage.`;
      } else {
        userMessage.value = `Здравствуйте, Федор! Меня интересует: ${typeName}. Расчет калькулятора: ${totalCost.toLocaleString("ru-RU")} ₽, срок: ~${totalDays} раб. дней. Готов обсудить техническое задание.`;
      }

      const contactSec = document.getElementById("contact");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      }
      userMessage.focus();
    });
  }
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove("active");
          const otherAns = other.querySelector(".faq-answer");
          if (otherAns) otherAns.style.maxHeight = null;
          const otherBtn = other.querySelector(".faq-question");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      if (isActive) {
        item.classList.remove("active");
        answer.style.maxHeight = null;
        questionBtn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        questionBtn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById("leadForm");
  if (!form) return;

  const submitBtn = document.getElementById("submitBtn");
  const formStatus = document.getElementById("formStatus");
  const nameInput = document.getElementById("userName");
  const contactInput = document.getElementById("userContact");
  const nameError = document.getElementById("nameError");
  const contactError = document.getElementById("contactError");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    nameError.textContent = "";
    contactError.textContent = "";
    formStatus.className = "form-status-msg";
    formStatus.textContent = "";

    let isValid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent =
        currentLang === "en"
          ? "Please provide your name"
          : currentLang === "de"
            ? "Bitte Namen eingeben"
            : "Пожалуйста, укажите имя";
      nameInput.focus();
      isValid = false;
    }

    if (!contactInput.value.trim()) {
      contactError.textContent =
        currentLang === "en"
          ? "Please enter email or phone"
          : currentLang === "de"
            ? "Bitte Telefon oder E-Mail angeben"
            : "Укажите контакт для связи";
      if (isValid) contactInput.focus();
      isValid = false;
    }

    if (!isValid) return;

    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        formStatus.classList.add("success");
        formStatus.textContent =
          currentLang === "en"
            ? "✓ Message sent successfully! I will contact you shortly."
            : currentLang === "de"
              ? "✓ Nachricht erfolgreich gesendet! Ich melde mich in Kürze."
              : "✓ Заявка успешно отправлена! Я свяжусь с вами в ближайшее время.";
        form.reset();
      } else {
        throw new Error(data.message || "Ошибка отправки");
      }
    } catch (err) {
      formStatus.classList.add("error");
      formStatus.textContent =
        err.message ||
        "Ошибка соединения. Напишите напрямую на почту: losevfedor287@gmail.com или в Telegram @lonelyauthor";
    } finally {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
    }
  });
}

function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 450);
    },
    { passive: true },
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

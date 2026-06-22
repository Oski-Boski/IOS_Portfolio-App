// ═══════════════════════════════════════════
// Portfolio - Dane początkowe
// ═══════════════════════════════════════════

export const profileData = {
  name: "Oskar Mikusz",
  surname: "Portfolio",
  title: "Student Informatyki",
  school: "Akademia Śląska",
  bio: "Student kierunku informatycznego na Akademii Śląskiej. Pasjonat tworzenia aplikacji webowych i mobilnych. Doświadczenie w React, React Native, Vue.js, Node.js, Python/Django oraz narzędziach no-code. Zawsze szukam nowych wyzwań technologicznych.",
  avatar: "👨‍💻",
  skills: [
    "React",
    "React Native",
    "Vue.js",
    "JavaScript",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "HTML/CSS",
    "Git",
    "Figma",
    "Kotlin",
  ],
  github: "https://github.com/Oski-Boski",
};

export const initialProjects = [
  {
    id: "1",
    name: "AutoMate",
    subtitle: "Asystent Motoryzacyjny",
    description:
      "Mobilna aplikacja do zarządzania flotą samochodów, harmonogramem przeglądów i historią serwisową. Ciemny motyw sportowy z czerwonymi akcentami i teksturą carbon fiber. 5 interaktywnych ekranów z nawigacją, formularzami i zarządzaniem stanem.",
    tech: ["React", "Vite", "CSS-in-JS"],
    icon: "🏎️",
    color: "#FF1744",
    features: [
      "Dashboard z progress barem zadań",
      "Garaż z wyszukiwarką i siatką 2x2",
      "Formularz dodawania aut z walidacją",
      "Szczegóły auta z historią serwisową",
      "Profil użytkownika z ustawieniami",
    ],
  },
  {
    id: "2",
    name: "Smakownik",
    subtitle: "Generator Przepisów Kulinarnych",
    description:
      "Aplikacja webowa do generowania przepisów kulinarnych z wykorzystaniem sztucznej inteligencji Google Gemini. Backend w Node.js/Express, frontend w Vue 3/Vite. Funkcje: autoryzacja JWT, synteza mowy (Web Speech API), eksport do PDF, przechowywanie danych w JSON.",
    tech: ["Vue.js", "Node.js", "Express", "Gemini API"],
    icon: "🍳",
    color: "#FF9100",
    github: "",
    features: [
      "Generowanie przepisów przez AI (Gemini)",
      "Autoryzacja użytkowników (JWT)",
      "Synteza mowy - odczytywanie przepisów (TTS)",
      "Eksport przepisów do PDF (pdfmake)",
      "Responsywny interfejs Vue 3",
    ],
  },
  {
    id: "3",
    name: "RezerWizyta",
    subtitle: "System Rezerwacji Salonu Fryzjerskiego",
    description:
      "System rezerwacji wizyt w salonie fryzjerskim zbudowany na platformie Glide Apps (no-code/low-code). Wykorzystuje Glide Tables z kolumnami obliczeniowymi do wykrywania konfliktów terminów. Intuicyjny interfejs mobilny z kalendarzem i listą dostępnych usług.",
    tech: ["Glide Apps", "No-Code", "Glide Tables"],
    icon: "💇",
    color: "#E040FB",
    github: "",
    features: [
      "Rezerwacja wizyt z wyborem daty i godziny",
      "Wykrywanie konfliktów terminów",
      "Lista usług z cenami",
      "Panel administracyjny",
      "Responsywny interfejs mobilny",
    ],
  },
];

export const contactData = {
  email: "oskimik10@gmail.com",
  github: "https://github.com/Oski-Boski",
  linkedin: "",
  phone: "",
  location: "Katowice, Polska",
  school: "Akademia Śląska",
};

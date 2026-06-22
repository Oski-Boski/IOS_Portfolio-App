<div align="center">

# 🚀 Portfolio Studenta

### Oskar — Akademia Śląska

Mobilna aplikacja portfolio zbudowana w React Native / Expo z nowoczesnym ciemnozielonym motywem.

[![React Native](https://img.shields.io/badge/React_Native-0.76-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-52-000020?style=flat-square&logo=expo&logoColor=white)](https://expo.dev/)

</div>

---

## Opis projektu

Aplikacja mobilna przedstawiająca portfolio studenta informatyki. Zawiera profil z danymi osobowymi i umiejętnościami, listę zrealizowanych projektów z możliwością przeglądania szczegółów, formularz dodawania nowych projektów z walidacją danych oraz ekran kontaktowy. Projekty są zapisywane lokalnie (AsyncStorage), dzięki czemu dane nie znikają po ponownym uruchomieniu aplikacji.

Aplikacja została zbudowana w React Native z Expo SDK 52, z własną kolorystyką (ciemnozielony motyw), spersonalizowanymi danymi i własnymi projektami.

---

## Instrukcja uruchomienia

### Wymagania

- Node.js 18+
- npm

### Instalacja

```bash
git clone https://github.com/Oski-Boski/IOS_Portfolio-App.git
cd portfolio-app
npm install
npx expo install expo-asset
```

### Uruchomienie (przeglądarka)

```bash
npx expo start --web
```

Aplikacja otworzy się pod adresem `http://localhost:8081`.

### Uruchomienie (telefon)

```bash
npx expo start
```

Zeskanuj QR kod w aplikacji Expo Go (iOS / Android).

---

## Lista funkcjonalności

### 1. Ekran Profilu

- Zdjęcie profilowe studenta z imieniem i nazwiskiem
- Kierunek studiów i uczelnia (Akademia Śląska)
- Sekcja "O mnie" z opisem
- Siatka 12 umiejętności technicznych (React, Vue.js, Node.js, Python, Django, Kotlin...)
- Statystyki: liczba projektów, umiejętności, rok studiów
- Link do profilu GitHub

### 2. Lista Projektów

- Karty projektów z ikonami, nazwami, podtytułami
- Badge technologii na każdej karcie
- Przycisk "Dodaj" otwierający formularz
- Kliknięcie karty otwiera ekran szczegółów

### 3. Szczegóły Projektu

- Hero z ikoną i nazwą projektu
- Pełny opis projektu
- Lista technologii z kolorowymi badge'ami
- Lista funkcjonalności z kropkami
- Link do repozytorium GitHub

### 4. Formularz Dodawania Projektu

- 7 pól: nazwa, podtytuł, opis, technologie, ikona emoji, link GitHub, funkcjonalności
- Walidacja:
  - Nazwa — wymagana, minimum 2 znaki
  - Podtytuł — wymagany
  - Opis — wymagany, minimum 20 znaków
  - Technologie — wymagane (min. 1)
- Komunikaty błędów wyświetlane pod polami
- Walidacja w czasie rzeczywistym po pierwszym kliknięciu "Dodaj"

### 5. Ekran Kontaktowy

- E-mail, GitHub, lokalizacja, uczelnia
- Status dostępności do współpracy

### 6. Nawigacja

- Dolna belka nawigacyjna z 3 zakładkami: Profil, Projekty, Kontakt
- Nawigacja do szczegółów projektu i formularza dodawania
- Przycisk "wstecz" w nagłówku

### 7. Zapis lokalny (AsyncStorage)

- Projekty zapisywane automatycznie po dodaniu
- Dane przetrwają zamknięcie i ponowne uruchomienie aplikacji
- Początkowe dane: 3 projekty (AutoMate, Smakownik, RezerWizyta)

### 8. Personalizacja

- Własne dane studenta
- Własne projekty z opisami i technologiami
- Własna kolorystyka — ciemnozielony motyw (#00C853, #0A0F0D)

---

## Projekty w portfolio

| Projekt     | Opis                                      | Technologie                          |
| ----------- | ----------------------------------------- | ------------------------------------ |
| AutoMate    | Aplikacja do zarządzania flotą samochodów | React, Vite, CSS-in-JS               |
| Smakownik   | Generator przepisów kulinarnych z AI      | Vue.js, Node.js, Express, Gemini API |
| RezerWizyta | System rezerwacji salonu fryzjerskiego    | Glide Apps, No-Code, Glide Tables    |

---

## Widoki z Figmy

[Profil](./docs/01-profil.png)
[Projekty](./docs/02-projekty.png)
[Szczegóły](./docs/03-szczegoly.png)
[Dodaj](./docs/04-dodaj.png)
[Kontakt](./docs/05-kontakt.png)

---

## Design System

### Kolorystyka — Modern Dark Green

| Token          | Hex       | Rola                                 |
| -------------- | --------- | ------------------------------------ |
| Green          | `#00C853` | Główny akcent — przyciski, nawigacja |
| Green Bright   | `#69F0AE` | Umiejętności, podświetlenia          |
| Background     | `#0A0F0D` | Tło ekranów                          |
| Card           | `#121A16` | Tło kart i elementów UI              |
| Text           | `#E8F5E9` | Tekst główny                         |
| Text Secondary | `#7A8F82` | Opisy, podpisy                       |
| Border         | `#1E2D25` | Obramowania                          |

---

## Technologie

| Narzędzie        | Wersja | Rola                          |
| ---------------- | ------ | ----------------------------- |
| React Native     | 0.76   | Framework mobilny             |
| Expo             | 52     | Platforma deweloperska        |
| AsyncStorage     | 1.23   | Zapis lokalny danych          |
| react-native-web | 0.19   | Kompatybilność z przeglądarką |

---

## Struktura plików

```
portfolio-app/
├── App.js                          # Router + nawigacja + tab bar
├── app.json                        # Konfiguracja Expo
├── package.json                    # Zależności
└── src/
    ├── components/ui.js            # 8 komponentów UI
    ├── screens/
    │   ├── ProfileScreen.js        # Profil studenta
    │   ├── ProjectsScreen.js       # Lista projektów
    │   ├── ProjectDetailScreen.js  # Szczegóły projektu
    │   ├── AddProjectScreen.js     # Formularz dodawania
    │   └── ContactScreen.js        # Dane kontaktowe
    ├── hooks/useProjects.js        # Hook z AsyncStorage
    ├── data/initialData.js         # Dane początkowe
    └── styles/tokens.js            # Design tokens
```

---

## Licencja

<div align="center">

**Oskar Mikusz Akademia Śląska**

</div>

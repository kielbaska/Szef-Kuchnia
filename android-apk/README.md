# Chef Mode APK (Android)

Ten folder zawiera gotowy projekt Android (WebView), który otwiera Twoją apkę z Netlify.

## 1) Ustaw swój link Netlify

Edytuj plik:

`app/src/main/res/values/strings.xml`

Podmień:

`https://YOUR-NETLIFY-SITE.netlify.app/`

na swój prawdziwy adres.

## 2) Otwórz projekt w Android Studio

1. Otwórz Android Studio
2. Kliknij `Open`
3. Wskaż folder `android-apk`
4. Poczekaj na sync Gradle

## 3) Zbuduj APK

1. Menu: `Build` -> `Build Bundle(s) / APK(s)` -> `Build APK(s)`
2. Po kompilacji kliknij `locate`
3. Plik znajdziesz zwykle tu:

`app/build/outputs/apk/debug/app-debug.apk`

## 4) Instalacja na telefonie

1. Wyślij `app-debug.apk` na telefon
2. Otwórz plik APK i zainstaluj
3. Jeśli Android blokuje instalację: włącz "Instaluj z nieznanych źródeł" dla aplikacji, z której otwierasz plik

## Uwagi

- Ikona launchera jest już dodana (czapka szefa).
- Aplikacja działa jako kontener WebView, więc wymaga internetu i aktywnego linku Netlify.
- Jeśli chcesz wersję całkiem offline (bez Netlify), mogę zrobić wariant z lokalnymi plikami HTML/CSS/JS w APK.

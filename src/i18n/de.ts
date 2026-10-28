import type { Dictionary } from './types.ts'

export const de: Dictionary = {
    meta: {
        homeTitle: 'Kyrylo Meister — Frontend-Entwickler',
        description:
            'Portfolio von Kyrylo Meister, Frontend-Entwickler aus Halle (Saale): ausgewählte Projekte, Erfahrung und Kontakt.',
    },
    nav: {
        items: { work: 'Projekte', about: 'Über mich', experience: 'Erfahrung', contact: 'Kontakt' },
        cta: 'Schreiben Sie mir',
        menu: 'Menü',
        close: 'Schließen',
        mainLabel: 'Hauptnavigation',
        logoLabel: '{name}, nach oben',
        language: 'Sprache',
    },
    hero: {
        status: 'Offen für neue Möglichkeiten',
        title: ['Ich', 'baue', '*saubere*,', '*zuverlässige*', 'Weboberflächen.'],
        lead: 'Ich bin Kyrylo, Frontend-Entwickler in Halle (Saale). Mein Schwerpunkt liegt auf TypeScript, React und Next.js, dazu kommt Backend-Erfahrung mit Node.js und REST-APIs. Seit 2024 setze ich kommerzielle Projekte eigenständig um, von der Anforderung bis zum Deployment.',
        viewWork: 'Projekte ansehen',
        discuss: 'Projekt besprechen',
        chipsLabel: 'Kurz gesagt',
        chips: ['Freiberuflich seit 2024', 'Halle (Saale), Deutschland', 'React · TypeScript · Next.js'],
        floatA: '9+ kommerzielle Projekte',
        floatB: 'Deutsch B2',
        codeLabel: 'Codeausschnitt mit einer Kurzbeschreibung des Entwicklers',
    },
    work: {
        eyebrow: 'projekte',
        title: 'Ausgewählte Projekte',
        count: { one: '{n} Projekt', other: '{n} Projekte' },
        archive: 'Archiv',
        techLabel: 'Technologien',
        archiveTypes: {
            kidsstory: 'Mehrseitige Website',
            positivus: 'Landingpage',
            webstudio: 'Landingpage',
            fortnite: 'Web-App-Prototyp',
        },
    },
    about: {
        eyebrow: 'über mich',
        title: 'Wer ich bin und was ich mache',
        statement:
            'Ich setze Designs in *zuverlässige*, wartbare Oberflächen um: von der Anforderung über die Komponentenarchitektur und API-Anbindung bis zum Deployment.',
        text: 'Mein Fokus liegt auf sauberem, wartbarem Code. Ich bin zuverlässig, selbstständig und schnell in der Einarbeitung in neue Tools und Codebases. Sprachen: Ukrainisch (Muttersprache), Russisch (verhandlungssicher), Englisch (B1–B2), Deutsch (B2).',
        photoAlt: 'Porträt von Kyrylo Meister',
        services: [
            {
                title: 'Oberflächen',
                text: 'Pixelgenaue, vollständig responsive UIs auf Basis von Figma-Designs und skalierbare Komponentensysteme.',
                stack: 'React · Next.js · TypeScript · Tailwind · SCSS · Styled Components',
            },
            {
                title: 'State und Daten',
                text: 'State-Management mit Redux Toolkit und Redux Persist, API-Anbindung und komplexe mehrstufige Abläufe.',
                stack: 'Redux Toolkit · Redux Persist · REST API',
            },
            {
                title: 'Backend und Echtzeit',
                text: 'APIs mit Node.js und Express, MongoDB und PostgreSQL sowie Echtzeit-Funktionen mit WebRTC.',
                stack: 'Node.js · Express · MongoDB · PostgreSQL · WebRTC',
            },
        ],
        stats: {
            years: 'Jahre freiberuflich',
            projects: 'kommerzielle Projekte',
            languages: 'gesprochene Sprachen',
        },
    },
    experience: {
        eyebrow: 'erfahrung',
        title: 'Wo ich gearbeitet und studiert habe',
        cv: 'Lebenslauf herunterladen (PDF)',
        items: [
            {
                years: '08.2024 — heute',
                role: 'Freiberuflicher Frontend-Entwickler',
                org: 'Selbstständig',
                desc: '9+ kommerzielle Projekte für Kunden aus den Bereichen Gamedev, SaaS und Kreativwirtschaft. Pixelgenaue, vollständig responsive UIs auf Basis von Figma-Designs, inklusive komplexer mehrseitiger Abläufe. Skalierbare Komponentensysteme mit React und TypeScript, State-Management mit Redux Toolkit und Redux Persist. SaaS-Oberflächen mit mehrstufigen Prozessen: Ausstellung, Freigabe, Gegenzeichnung, Widerruf und Archivierung.',
            },
            {
                years: '2023 — 2027',
                role: 'Bachelorstudium, Informationssysteme und Technologien',
                org: 'Nationale Technische Universität der Ukraine „Igor Sikorsky Kyiv Polytechnic Institute“',
            },
            {
                years: '06.2023 — 07.2024',
                role: 'Servicekraft',
                desc: 'Betreuung von Gästen im Service, Beratung zu Speisen und Getränken sowie eigenverantwortliche Bearbeitung von Bestellungen. Teamarbeit unter hoher Belastung während der Stoßzeiten, in enger Abstimmung mit Küche und Bar.',
            },
            {
                years: 'B1 · B2',
                role: 'Deutschkurs, Zertifikate B1 und B2',
                org: 'Learn and Speak Halle',
            },
        ],
    },
    contact: {
        eyebrow: 'kontakt',
        title: 'Ein Projekt oder eine Stelle zu besetzen? Lassen Sie uns *sprechen*.',
        location: 'Wohnhaft in Halle (Saale), Deutschland.',
        copy: { idle: 'E-Mail kopieren', copied: 'Kopiert', selected: 'Markiert, Strg+C drücken' },
        socialsLabel: 'Soziale Netzwerke',
    },
    footer: { tagline: 'Von Hand gebaut, ohne Baukasten', top: 'Nach oben ↑' },
    palette: { label: 'Farbschema', names: { violet: 'Violett', white: 'Weiß', lilac: 'Flieder' } },
    project: {
        back: '← Alle Projekte',
        eyebrow: 'Projekt',
        meta: { role: 'Rolle', year: 'Jahr', stack: 'Stack', status: 'Status' },
        viewer: {
            label: 'Veröffentlichtes Projekt',
            sizesLabel: 'Fenstergröße',
            sizes: { desktop: 'Desktop', tablet: 'Tablet', mobile: 'Smartphone' },
            reload: 'Seite im Fenster neu laden',
            openTab: 'Projekt in neuem Tab öffnen',
            loading: 'Lädt …',
            iframeTitle: '{title}: veröffentlichtes Projekt',
            hint: 'Die Seite wird nicht angezeigt? Manche Seiten verbieten die Einbettung.',
            hintOpen: 'In neuem Tab öffnen',
            hintCode: 'Quellcode auf GitHub',
        },
        about: {
            eyebrow: 'über das projekt',
            title: 'Wie es lief',
            task: 'Aufgabe',
            solution: 'Lösung',
            result: 'Ergebnis',
        },
        pager: { label: 'Weitere Projekte', prev: '← Zurück', next: 'Weiter →' },
    },
    notFound: {
        title: 'Seite nicht gefunden — {name}',
        eyebrow: 'fehler 404',
        text: 'Diese Seite gibt es nicht. Möglicherweise ist der Link veraltet.',
        home: '← Zur Startseite',
    },
    projects: {
        onlinemarket: {
            desc: 'Onlineshop mit Produktkatalog, Suche, Filtern, Warenkorb, Favoriten und Benutzerkonten.',
            role: 'Fullstack',
            status: 'Live',
            brief: {
                task: 'Ein vollständiger Onlineshop: Katalog mit Suche und Filtern, Produktseiten, Warenkorb, Favoriten und persönliche Konten.',
                solution:
                    'React-Client mit Redux Toolkit, Redux Persist, React Router und styled-components sowie eine REST-API mit Express, JWT-Authentifizierung, Joi-Validierung und MongoDB. ESLint, Prettier und Husky sorgen für einheitlichen Code.',
                result: 'Client und API laufen auf Vercel: Man kann Produkte ansehen, sich registrieren und den Warenkorb füllen.',
            },
        },
        taskpro: {
            desc: 'Kanban-Board zur Aufgabenplanung: eigene Boards, Spalten, Karten mit Priorität und Deadline, helles und dunkles Design.',
            role: 'Fullstack',
            status: 'Live',
            brief: {
                task: 'Ich wollte eine vollwertige Aufgaben-App statt einer Übungs-Todo-Liste: mit Accounts, eigenen Boards und Daten, die auf allen Geräten verfügbar sind.',
                solution:
                    'React-Client mit Redux Toolkit und styled-components, Express-Server mit JWT-Authentifizierung und MongoDB. Boards mit eigenem Hintergrund, Spalten sowie Karten mit Priorität und Deadline aus einem Kalender.',
                result:
                    'Die App ist auf Vercel veröffentlicht: Man kann sich registrieren, Boards anlegen und Aufgaben von jedem Gerät aus verwalten.',
            },
        },
        fleetops: {
            desc: 'Flottenmanagement für ein Transportunternehmen: Live-Karte der Fahrzeuge, Dispositionsboard mit Drag-and-drop, Fahrzeuge und Fahrer.',
            role: 'Fullstack',
            status: 'Live',
            brief: {
                task: 'Disponenten müssen sehen, wo jedes Fahrzeug ist, Fahrten ohne Doppelbuchungen planen und Fahrzeuge und Fahrer an einem Ort verwalten, mit getrennten Rechten für Disponenten und Betrachter.',
                solution:
                    'Client mit React 19 und TypeScript, TanStack Query, einer Live-Karte auf MapLibre und einem Gantt-Board mit dnd-kit und optimistischen Updates. Fastify-API auf PostgreSQL mit PostGIS und Drizzle: Exclusion Constraints verhindern Doppelbuchungen, der typisierte Client wird aus dem OpenAPI-Vertrag generiert.',
                result: 'Beide Teile laufen auf Vercel mit CI. In der Demo kann man sich mit einem Klick als Disponent oder Betrachter anmelden.',
            },
        },
        barbershop: {
            desc: 'Landingpage für einen fiktiven Barbershop: Leistungen und Preise, Barber, Kontakt und ein Buchungsfenster.',
            role: 'Frontend (Layout)',
            status: 'Demo-Projekt',
            brief: {
                task: 'Ein Übungsprojekt für responsives Layout und CSS-Präprozessoren: eine Landingpage für einen fiktiven Barbershop.',
                solution:
                    'Semantisches HTML5, modulares Sass und ein Layout, das sich an Smartphone, Tablet und Desktop anpasst, dazu ein Burger-Menü und ein Buchungsfenster in reinem JavaScript.',
                result:
                    'Die Seite ist auf GitHub Pages veröffentlicht und dient als Live-Demo für Layout- und Sass-Kenntnisse.',
            },
        },
    },
}
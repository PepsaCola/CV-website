import type { Dictionary } from './types.ts'

export const en: Dictionary = {
    meta: {
        homeTitle: 'Kyrylo Meister — Frontend developer',
        description:
            'Portfolio of Kyrylo Meister, a frontend developer from Halle (Saale): selected projects, experience and contact.',
    },
    nav: {
        items: { work: 'Work', about: 'About', experience: 'Experience', contact: 'Contact' },
        cta: 'Get in touch',
        menu: 'Menu',
        close: 'Close',
        mainLabel: 'Main navigation',
        logoLabel: '{name}, back to top',
        language: 'Language',
    },
    hero: {
        status: 'Open to new opportunities',
        title: ['I', 'build', '*clean*,', '*reliable*', 'web', 'interfaces.'],
        lead: "I'm Kyrylo, a frontend developer based in Halle (Saale), Germany. I work with TypeScript, React and Next.js and have backend experience with Node.js and REST APIs. Since 2024 I have been delivering commercial projects on my own, from requirements to deployment.",
        viewWork: 'See my work',
        discuss: 'Discuss a project',
        chipsLabel: 'In short',
        chips: ['Freelance since 2024', 'Halle (Saale), Germany', 'React · TypeScript · Next.js'],
        floatA: '9+ commercial projects',
        floatB: 'German B2',
        codeLabel: 'Code snippet with a short description of the developer',
    },
    work: {
        eyebrow: 'work',
        title: 'Selected projects',
        count: { one: '{n} project', other: '{n} projects' },
        archive: 'Archive',
        techLabel: 'Technologies',
        archiveTypes: {
            positivus: 'Landing page',
            webstudio: 'Landing page',
            fortnite: 'Web app prototype',
        },
    },
    about: {
        eyebrow: 'about',
        title: 'Who I am and what I do',
        statement:
            'I turn designs into *reliable*, maintainable interfaces: from requirements and component architecture to API integration and deployment.',
        text: "My focus is clean, maintainable code. I'm dependable, work independently and get up to speed quickly with new tools and codebases. I speak Ukrainian (native), Russian (fluent), English (B1–B2) and German (B2).",
        photoAlt: 'Portrait of Kyrylo Meister',
        services: [
            {
                title: 'Interfaces',
                text: 'Pixel-perfect, fully responsive UIs built from Figma designs, with scalable component systems.',
                stack: 'React · Next.js · TypeScript · Tailwind · SCSS · Styled Components',
            },
            {
                title: 'State and data',
                text: 'State management with Redux Toolkit and Redux Persist, REST API integration and complex multi-step flows.',
                stack: 'Redux Toolkit · Redux Persist · REST API',
            },
            {
                title: 'Backend and real time',
                text: 'APIs with Node.js and Express, MongoDB and PostgreSQL, plus real-time features with WebRTC.',
                stack: 'Node.js · Express · MongoDB · PostgreSQL · WebRTC',
            },
        ],
        stats: {
            years: 'years as a freelancer',
            projects: 'commercial projects',
            languages: 'languages spoken',
        },
    },
    experience: {
        eyebrow: 'experience',
        title: "Where I've worked and studied",
        cv: 'Download CV (PDF, German)',
        items: [
            {
                years: '08.2024 — present',
                role: 'Freelance frontend developer',
                org: 'Self-employed',
                desc: '9+ commercial projects for clients in gamedev, SaaS and the creative industry. Pixel-perfect, fully responsive UIs from Figma designs, including complex multi-page flows. Scalable component systems with React and TypeScript, state management with Redux Toolkit and Redux Persist. SaaS interfaces with multi-step processes: issuing, approval, countersigning, revocation and archiving.',
            },
            {
                years: '2023 — 2027',
                role: "Bachelor's degree, Information Systems and Technologies",
                org: 'National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"',
            },
            {
                years: '06.2023 — 07.2024',
                role: 'Service staff',
                desc: 'Guest service, advising on food and drinks and handling orders independently. Teamwork under high load during peak hours, in close coordination with the kitchen and bar.',
            },
            {
                years: 'B1 · B2',
                role: 'German courses, certificates B1 and B2',
                org: 'Learn and Speak Halle',
            },
        ],
    },
    contact: {
        eyebrow: 'contact',
        title: "Have a project or a role to fill? Let's *talk*.",
        location: 'Based in Halle (Saale), Germany.',
        copy: { idle: 'Copy email', copied: 'Copied', selected: 'Selected, press Ctrl+C' },
        socialsLabel: 'Social links',
    },
    footer: { tagline: 'Built by hand, no site builders', top: 'Back to top ↑' },
    palette: { label: 'Palette', names: { violet: 'Violet', white: 'White', lilac: 'Lilac' } },
    project: {
        back: '← All projects',
        eyebrow: 'project',
        meta: { role: 'Role', year: 'Year', stack: 'Stack', status: 'Status' },
        viewer: {
            label: 'Deployed project',
            sizesLabel: 'Window size',
            sizes: { desktop: 'Desktop', tablet: 'Tablet', mobile: 'Phone' },
            reload: 'Reload the page in the window',
            openTab: 'Open the project in a new tab',
            loading: 'Loading…',
            iframeTitle: '{title}: deployed project',
            hint: 'Site not showing? Some sites block embedding.',
            hintOpen: 'Open in a new tab',
            hintCode: 'Source code on GitHub',
        },
        about: {
            eyebrow: 'about the project',
            title: 'How it went',
            task: 'Task',
            solution: 'Solution',
            result: 'Result',
        },
        pager: { label: 'Other projects', prev: '← Previous', next: 'Next →' },
    },
    notFound: {
        title: 'Page not found — {name}',
        eyebrow: 'error 404',
        text: "This page doesn't exist. The link may be outdated.",
        home: '← Back to home',
    },
    projects: {
        taskpro: {
            desc: 'Kanban board for task planning: separate boards, columns, cards with priority and deadline, light and dark themes.',
            role: 'Fullstack',
            status: 'Live',
            brief: {
                task: 'I wanted a complete task app rather than a practice to-do list: with accounts, separate boards and data that follows you across devices.',
                solution:
                    'React client with Redux Toolkit and styled-components, Express server with JWT authentication and MongoDB. Boards with their own backgrounds, columns, and cards with a priority and a deadline picked from a calendar.',
                result: 'The app is deployed on Vercel: you can register, create boards and manage tasks from any device.',
            },
        },
        kidsstory: {
            desc: 'Multi-page website for an English-language kindergarten and club: schedule, news, reviews, map and sign-up forms.',
            role: 'Frontend',
            status: 'Live',
            brief: {
                task: 'Parents needed a site where they can quickly find the schedule, news and contacts and sign a child up, equally comfortable on a phone and on a desktop.',
                solution:
                    'A site of 15 pages plus detail pages for news and services, built with React 19 and React Router 7. Styling with styled-components, carousels with Swiper and Slick, an interactive Leaflet map and sign-up forms with modal windows. The layout is adapted for phone and desktop.',
                result:
                    'The site is deployed on Vercel: schedule, news, reviews, documents and the route map are in one place, and sign-up forms are reachable from the home page.',
            },
        },
        barbershop: {
            desc: 'Landing page for a fictional barbershop: services and prices, barbers, contacts and a booking pop-up.',
            role: 'Frontend (layout)',
            status: 'Demo project',
            brief: {
                task: 'A practice project for responsive layout and CSS preprocessors: a landing page for a fictional barbershop.',
                solution:
                    'Semantic HTML5, modular Sass and a layout that adapts to mobile, tablet and desktop, plus a burger menu and a booking pop-up in plain JavaScript.',
                result: 'The page is published on GitHub Pages and works as a live demo of layout and Sass skills.',
            },
        },
    },
}
// Мовонезалежні дані. Тексти для кожної мови лежать у src/i18n (en.ts, de.ts, uk.ts).

export const profile = {
    name: 'Kyrylo Meister',
    initials: 'KM',
    email: 'meysterkiril@gmail.com',
    /** Покладіть PDF у public/ з цією назвою */
    cvUrl: '/Kyrylo-Meister-CV-DE.pdf',
    /** Лежить у public/photo.jpg */
    photo: '/photo.jpg',
}

export const navIds = ['work', 'about', 'experience', 'contact'] as const
export type NavId = (typeof navIds)[number]

export const technologies = [
    'React',
    'TypeScript',
    'Next.js',
    'Redux Toolkit',
    'Tailwind CSS',
    'SCSS',
    'Styled Components',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'REST API',
    'WebRTC',
    'Git',
    'Figma',
    'Vercel',
    'Vite',
]

export type ArchiveId = 'kidsstory' | 'positivus' | 'webstudio' | 'fortnite'

export const archive: { id: ArchiveId; name: string; tech: string; year: number; href: string }[] = [
    { id: 'kidsstory', name: 'Kidsstory', tech: 'React, styled-components', year: 2025, href: 'https://github.com/PepsaCola/kidsstory' },
    { id: 'positivus', name: 'Positivus', tech: 'HTML, Sass', year: 2024, href: 'https://github.com/PepsaCola/maket-1' },
    { id: 'webstudio', name: 'Web Studio', tech: 'HTML, Sass', year: 2024, href: 'https://github.com/PepsaCola/hm-8' },
    {
        id: 'fortnite',
        name: 'FortniteHelper',
        tech: 'JavaScript, Express, Parcel',
        year: 2024,
        href: 'https://github.com/PepsaCola/FortniteHelperWeb',
    },
]

/** Іконки послуг за порядком у словнику */
export const serviceIcons = ['interfaces', 'state', 'backend'] as const

export type StatId = 'years' | 'projects' | 'languages'

// Фріланс з 08.2024, число років рахується само
const yearsFreelancing = Math.max(1, Math.floor((Date.now() - new Date('2024-08-01').getTime()) / 31_557_600_000))

export const stats: { id: StatId; value: number; suffix: string }[] = [
    { id: 'years', value: yearsFreelancing, suffix: '+' },
    { id: 'projects', value: 9, suffix: '+' },
    { id: 'languages', value: 4, suffix: '' },
]

export const socials = [
    { label: 'GitHub', href: 'https://github.com/PepsaCola' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kyrylo-meister-683678356/' },
    { label: 'Telegram', href: 'https://t.me/kyryluch' },
]
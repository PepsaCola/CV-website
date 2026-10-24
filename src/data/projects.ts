// Мовонезалежні дані проєктів. Описи, роль і статус лежать у src/i18n (поле projects).

export type ProjectSlug = 'onlinemarket' | 'taskpro' | 'kidsstory' | 'barbershop'

export interface Project {
    slug: ProjectSlug
    title: string
    year: number
    tags: string[]
    /** Адреса, яку видно в адресному рядку вікна перегляду */
    liveUrl: string
    /** Що вантажиться в iframe */
    embedUrl: string
    /** Вихідний код на GitHub */
    repoUrl: string
}

export const projects: Project[] = [
    {
        slug: 'onlinemarket',
        title: 'Online Market',
        year: 2025,
        tags: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB'],
        liveUrl: 'https://online-market-bay.vercel.app',
        embedUrl: 'https://online-market-bay.vercel.app',
        repoUrl: 'https://github.com/PepsaCola/online-market',
    },
    {
        slug: 'taskpro',
        title: 'TaskPro',
        year: 2025,
        tags: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB'],
        liveUrl: 'https://todo-app-tau-inky-54.vercel.app',
        embedUrl: 'https://todo-app-tau-inky-54.vercel.app',
        repoUrl: 'https://github.com/PepsaCola/todo-app',
    },
    {
        slug: 'kidsstory',
        title: 'Kidsstory',
        year: 2025,
        tags: ['React', 'React Router', 'styled-components', 'Leaflet'],
        liveUrl: 'https://kidsstory-seven.vercel.app',
        embedUrl: 'https://kidsstory-seven.vercel.app',
        repoUrl: 'https://github.com/PepsaCola/kidsstory',
    },
    {
        slug: 'barbershop',
        title: 'BarberShop',
        year: 2024,
        tags: ['HTML', 'Sass', 'JavaScript', 'GitHub Pages'],
        liveUrl: 'https://pepsacola.github.io/BarberShop/',
        embedUrl: 'https://pepsacola.github.io/BarberShop/',
        repoUrl: 'https://github.com/PepsaCola/BarberShop',
    },
]
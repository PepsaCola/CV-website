import type { ProjectSlug } from '../data/projects.ts'
import type { ArchiveId, NavId, StatId } from '../data/site.ts'

export const LANGS = ['en', 'de', 'uk'] as const
export type Lang = (typeof LANGS)[number]

/** Основна мова сайту */
export const DEFAULT_LANG: Lang = 'en'

/** Форми множини за правилами Intl.PluralRules. Обов'язкова лише other */
export type PluralForms = { other: string } & Partial<Record<'zero' | 'one' | 'two' | 'few' | 'many', string>>

export interface ServiceText {
    title: string
    text: string
    stack: string
}

export interface TimelineItem {
    years: string
    role: string
    org?: string
    desc?: string
}

export interface ProjectText {
    desc: string
    role: string
    status: string
    brief: { task: string; solution: string; result: string }
}

/** Усі тексти сайту. Слова в *зірочках* підсвічуються неоном */
export interface Dictionary {
    meta: { homeTitle: string; description: string }
    nav: {
        items: Record<NavId, string>
        cta: string
        menu: string
        close: string
        mainLabel: string
        /** Підстановка {name} */
        logoLabel: string
        language: string
    }
    hero: {
        status: string
        /** Заголовок по словах */
        title: string[]
        lead: string
        viewWork: string
        discuss: string
        chipsLabel: string
        chips: string[]
        floatA: string
        floatB: string
        codeLabel: string
    }
    work: {
        eyebrow: string
        title: string
        /** Підстановка {n} */
        count: PluralForms
        archive: string
        techLabel: string
        archiveTypes: Record<ArchiveId, string>
    }
    about: {
        eyebrow: string
        title: string
        statement: string
        text: string
        photoAlt: string
        services: ServiceText[]
        stats: Record<StatId, string>
    }
    experience: {
        eyebrow: string
        title: string
        cv: string
        items: TimelineItem[]
    }
    contact: {
        eyebrow: string
        title: string
        location: string
        copy: { idle: string; copied: string; selected: string }
        socialsLabel: string
    }
    footer: { tagline: string; top: string }
    palette: { label: string; names: Record<'violet' | 'white' | 'lilac', string> }
    project: {
        back: string
        eyebrow: string
        meta: { role: string; year: string; stack: string; status: string }
        viewer: {
            label: string
            sizesLabel: string
            sizes: Record<'desktop' | 'tablet' | 'mobile', string>
            reload: string
            openTab: string
            loading: string
            /** Підстановка {title} */
            iframeTitle: string
            hint: string
            hintOpen: string
            hintCode: string
        }
        about: { eyebrow: string; title: string; task: string; solution: string; result: string }
        pager: { label: string; prev: string; next: string }
    }
    notFound: { title: string; eyebrow: string; text: string; home: string }
    projects: Record<ProjectSlug, ProjectText>
}
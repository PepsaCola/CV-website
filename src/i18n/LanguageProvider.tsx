import { useCallback, useLayoutEffect, useMemo, useState, type ReactNode } from 'react'
import { de } from './de.ts'
import { en } from './en.ts'
import { LanguageContext } from './LanguageContext.ts'
import { DEFAULT_LANG, LANGS, type Dictionary, type Lang } from './types.ts'
import { uk } from './uk.ts'

const dictionaries: Record<Lang, Dictionary> = { en, de, uk }

const STORAGE_KEY = 'portfolio-lang'

const isLang = (value: string | null): value is Lang => LANGS.some((lang) => lang === value)

function readSaved(): Lang {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (isLang(saved)) return saved
    } catch {
        // сховище недоступне
    }
    return DEFAULT_LANG
}

/** Тримає поточну мову, запам'ятовує вибір і виставляє <html lang> */
export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>(readSaved)

    useLayoutEffect(() => {
        document.documentElement.lang = lang
    }, [lang])

    const setLang = useCallback((next: Lang) => {
        setLangState(next)
        try {
            localStorage.setItem(STORAGE_KEY, next)
        } catch {
            // ігноруємо
        }
    }, [])

    const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang, setLang])

    return <LanguageContext value={value}>{children}</LanguageContext>
}
import { createContext, useContext } from 'react'
import type { Dictionary, Lang } from './types.ts'

export interface I18n {
    lang: Lang
    setLang: (lang: Lang) => void
    /** Словник поточної мови */
    t: Dictionary
}

export const LanguageContext = createContext<I18n | null>(null)

export function useI18n() {
    const value = useContext(LanguageContext)
    if (!value) throw new Error('useI18n потрібно викликати всередині LanguageProvider')
    return value
}
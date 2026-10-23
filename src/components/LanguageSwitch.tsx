import { useI18n } from '../i18n/LanguageContext.ts'
import type { Lang } from '../i18n/types.ts'

const options: { lang: Lang; label: string; name: string }[] = [
    { lang: 'en', label: 'EN', name: 'English' },
    { lang: 'de', label: 'DE', name: 'Deutsch' },
    { lang: 'uk', label: 'UA', name: 'Українська' },
]

/** Перемикач мови в шапці */
export function LanguageSwitch() {
    const { lang, setLang, t } = useI18n()

    return (
        <div className="lang-switch" role="group" aria-label={t.nav.language}>
            {options.map((option) => (
                <button
                    className="lang-btn"
                    type="button"
                    key={option.lang}
                    lang={option.lang}
                    title={option.name}
                    aria-label={option.name}
                    aria-pressed={lang === option.lang}
                    onClick={() => setLang(option.lang)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}
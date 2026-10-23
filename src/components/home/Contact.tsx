import { useEffect, useRef, useState } from 'react'
import { profile, socials } from '../../data/site.ts'
import { useI18n } from '../../i18n/LanguageContext.ts'
import { renderNeon } from '../../i18n/neon.tsx'
import { Reveal } from '../Reveal.tsx'

type CopyState = 'idle' | 'copied' | 'selected'

export function Contact() {
    const { t } = useI18n()
    const mailRef = useRef<HTMLAnchorElement>(null)
    const timer = useRef<number>(0)
    const [state, setState] = useState<CopyState>('idle')

    useEffect(() => () => window.clearTimeout(timer.current), [])

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(profile.email)
            setState('copied')
        } catch {
            // Запасний варіант: виділяємо адресу, щоб її можна було скопіювати вручну
            if (mailRef.current) {
                const range = document.createRange()
                range.selectNodeContents(mailRef.current)
                const selection = window.getSelection()
                selection?.removeAllRanges()
                selection?.addRange(range)
            }
            setState('selected')
        }

        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setState('idle'), 2200)
    }

    return (
        <section className="section contact" id="contact" aria-labelledby="contact-title">
            <div className="wrap">
                <Reveal className="contact__panel spot">
                    <p className="eyebrow">{t.contact.eyebrow}</p>
                    <h2 className="contact__title" id="contact-title">
                        {renderNeon(t.contact.title)}
                    </h2>

                    <a className="contact__mail" href={`mailto:${profile.email}`} ref={mailRef}>
                        {profile.email}
                    </a>

                    <div className="contact__row">
                        <button className="btn btn--neon" type="button" onClick={copy}>
                            {t.contact.copy[state]}
                        </button>
                        <p className="contact__note">{t.contact.location}</p>
                    </div>

                    <ul className="socials" aria-label={t.contact.socialsLabel}>
                        {socials.map((social) => (
                            <li key={social.label}>
                                <a href={social.href} target="_blank" rel="noopener">
                                    {social.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    )
}
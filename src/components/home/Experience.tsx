import { useRef, useState } from 'react'
import { profile } from '../../data/site.ts'
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery.ts'
import { useScrollFrame } from '../../hooks/useScrollFrame.ts'
import { useI18n } from '../../i18n/LanguageContext.ts'
import { Reveal } from '../Reveal.tsx'

/** Хронологія: лінія «малюється» при скролі, а картки по черзі загоряються */
function Timeline() {
    const { t } = useI18n()
    const items = t.experience.items
    const listRef = useRef<HTMLOListElement>(null)
    const reduced = usePrefersReducedMotion()
    const [lit, setLit] = useState(0)

    useScrollFrame(() => {
        const list = listRef.current
        if (!list) return

        const rect = list.getBoundingClientRect()
        const mid = window.innerHeight * 0.6
        const progress = Math.min(1, Math.max(0, (mid - rect.top) / rect.height))

        list.style.setProperty('--p', progress.toFixed(4))
        setLit([...list.children].filter((item) => item.getBoundingClientRect().top < mid).length)
    })

    return (
        <ol className="timeline" ref={listRef}>
            {items.map((item, i) => (
                <Reveal as="li" className={reduced || i < lit ? 'is-lit' : undefined} key={i}>
                    <p className="timeline__years label">{item.years}</p>
                    <div className="timeline__card spot">
                        <h3>{item.role}</h3>
                        {item.org && <p className="timeline__company">{item.org}</p>}
                        {item.desc && <p className="timeline__desc">{item.desc}</p>}
                    </div>
                </Reveal>
            ))}
        </ol>
    )
}

export function Experience() {
    const { t } = useI18n()

    return (
        <section className="section" id="experience" aria-labelledby="exp-title">
            <div className="wrap">
                <Reveal as="header" className="section__head">
                    <div>
                        <p className="eyebrow">{t.experience.eyebrow}</p>
                        <h2 className="h2" id="exp-title">
                            {t.experience.title}
                        </h2>
                    </div>
                    <a className="btn btn--glass btn--sm" href={profile.cvUrl} target="_blank" rel="noopener">
                        {t.experience.cv}
                    </a>
                </Reveal>

                <Timeline />
            </div>
        </section>
    )
}
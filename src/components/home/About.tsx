import { useEffect, useState, type ReactNode } from 'react'
import { profile, serviceIcons, stats, type StatId } from '../../data/site.ts'
import { useInView } from '../../hooks/useInView.ts'
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery.ts'
import { useI18n } from '../../i18n/LanguageContext.ts'
import { renderNeon } from '../../i18n/neon.tsx'
import { Reveal } from '../Reveal.tsx'

const serviceIconPaths: Record<(typeof serviceIcons)[number], ReactNode> = {
    interfaces: (
        <>
            <rect x="3" y="4" width="18" height="16" rx="3" />
            <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
        </>
    ),
    state: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />,
    backend: (
        <>
            <rect x="3" y="3" width="18" height="7" rx="2" />
            <rect x="3" y="14" width="18" height="7" rx="2" />
            <path d="M7 6.5h.01M7 17.5h.01" />
        </>
    ),
}

/** Цифра, що «докручується» від нуля, коли потрапляє у вікно */
function Stat({ id, value, suffix }: { id: StatId; value: number; suffix: string }) {
    const { t } = useI18n()
    const reduced = usePrefersReducedMotion()
    const [ref, seen] = useInView<HTMLElement>({ threshold: 0.6, rootMargin: '0px' })
    const [shown, setShown] = useState(0)

    useEffect(() => {
        if (!seen || reduced) return

        const start = performance.now()
        let frame = requestAnimationFrame(function tick(now) {
            const k = Math.min(1, Math.max(0, (now - start) / 1400))
            setShown(Math.round(value * (1 - (1 - k) ** 3)))
            if (k < 1) frame = requestAnimationFrame(tick)
        })

        return () => cancelAnimationFrame(frame)
    }, [seen, reduced, value])

    return (
        <div>
            <dt className="label muted">{t.about.stats[id]}</dt>
            <dd ref={ref}>
                {reduced ? value : shown}
                {suffix}
            </dd>
        </div>
    )
}

export function About() {
    const { t } = useI18n()

    return (
        <section className="section section--glow" id="about" aria-labelledby="about-title">
            <div className="wrap">
                <Reveal as="header" className="section__head">
                    <div>
                        <p className="eyebrow">{t.about.eyebrow}</p>
                        <h2 className="h2" id="about-title">
                            {t.about.title}
                        </h2>
                    </div>
                </Reveal>

                <div className="bento">
                    <Reveal className="tile tile--statement spot">
                        <p className="about__statement">{renderNeon(t.about.statement)}</p>
                        <p className="about__text">{t.about.text}</p>
                    </Reveal>

                    <Reveal className="tile tile--photo spot" delay={0.12}>
                        <img className="photo__img" src={profile.photo} alt={t.about.photoAlt} width={384} height={512} loading="lazy" />
                    </Reveal>

                    {t.about.services.map((service, i) => (
                        <Reveal className="tile tile--service spot" delay={i * 0.1 || undefined} key={service.title}>
              <span className="icon-box" aria-hidden="true">
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                  {serviceIconPaths[serviceIcons[i]]}
                </svg>
              </span>
                            <h3 className="tile__title">{service.title}</h3>
                            <p>{service.text}</p>
                            <p className="label muted">{service.stack}</p>
                        </Reveal>
                    ))}

                    <Reveal as="dl" className="tile tile--stats spot" delay={0.1}>
                        {stats.map((stat) => (
                            <Stat key={stat.id} {...stat} />
                        ))}
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
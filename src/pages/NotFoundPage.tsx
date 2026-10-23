import { Link } from 'react-router'
import { profile } from '../data/site.ts'
import { useI18n } from '../i18n/LanguageContext.ts'
import { fmt } from '../i18n/utils.ts'

export function NotFoundPage() {
    const { t } = useI18n()

    return (
        <>
            <title>{fmt(t.notFound.title, { name: profile.name })}</title>

            <main id="top">
                <section className="proj-hero" aria-labelledby="nf-title">
                    <div className="wrap">
                        <p className="eyebrow">{t.notFound.eyebrow}</p>
                        <h1 className="proj-title" id="nf-title">
                            404
                        </h1>
                        <p className="proj-lead">{t.notFound.text}</p>
                        <Link className="back" to="/" style={{ marginTop: 'clamp(24px, 3vw, 40px)' }}>
                            {t.notFound.home}
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}
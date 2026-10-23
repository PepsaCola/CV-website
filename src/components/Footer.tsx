import { Link } from 'react-router'
import { profile } from '../data/site.ts'
import { useI18n } from '../i18n/LanguageContext.ts'

const year = new Date().getFullYear()

export function Footer() {
    const { t } = useI18n()

    return (
        <footer className="site-footer">
            <div className="wrap site-footer__bar">
                <p className="label">
                    © {year} {profile.name}
                </p>
                <p className="label muted">{t.footer.tagline}</p>
                <Link className="label to-top" to="#top">
                    {t.footer.top}
                </Link>
            </div>
        </footer>
    )
}
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { navIds, profile } from '../data/site.ts'
import { useScrolled } from '../hooks/useScrollFrame.ts'
import { useScrollSpy } from '../hooks/useScrollSpy.ts'
import { useI18n } from '../i18n/LanguageContext.ts'
import { fmt } from '../i18n/utils.ts'
import { cx } from '../utils.ts'
import { LanguageSwitch } from './LanguageSwitch.tsx'

export function Header() {
    const { pathname } = useLocation()
    const { t } = useI18n()
    const [open, setOpen] = useState(false)
    const scrolled = useScrolled()

    const isHome = pathname === '/'
    const spied = useScrollSpy(navIds, isHome)
    // На сторінці проєкту підсвічуємо «Роботи»
    const current = isHome ? spied : pathname.startsWith('/projects/') ? 'work' : null

    const close = () => setOpen(false)

    useEffect(() => {
        if (!open) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false)
        }

        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [open])

    return (
        <header className={cx('site-header', scrolled && 'is-scrolled', open && 'is-open')} id="site-header">
            <div className="wrap site-header__wrap">
                <div className="bar">
                    <Link className="logo" to="/#top" aria-label={fmt(t.nav.logoLabel, { name: profile.name })} onClick={close}>
                        <span className="logo__mark">{profile.initials}</span>
                        <span className="logo__name">{profile.name}</span>
                    </Link>

                    <nav className="site-nav" id="site-nav" aria-label={t.nav.mainLabel}>
                        <ul>
                            {navIds.map((id) => (
                                <li key={id}>
                                    <Link to={`/#${id}`} aria-current={current === id ? 'true' : undefined} onClick={close}>
                                        {t.nav.items[id]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <LanguageSwitch />

                    <Link className="btn btn--neon btn--sm site-header__cta" to="/#contact" onClick={close}>
                        {t.nav.cta}
                    </Link>
                    <button
                        className="nav-toggle"
                        type="button"
                        aria-expanded={open}
                        aria-controls="site-nav"
                        onClick={() => setOpen((value) => !value)}
                    >
                        <span className="nav-toggle__text">{open ? t.nav.close : t.nav.menu}</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
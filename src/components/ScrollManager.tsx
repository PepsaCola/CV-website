import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router'

/** Скрол після навігації: до якоря (#work), інакше на початок нової сторінки.
 *  Кнопка «назад» у браузері лишається на розсуд браузера */
export function ScrollManager() {
    const { key, pathname, hash } = useLocation()
    const navigationType = useNavigationType()
    const previousPath = useRef(pathname)

    useEffect(() => {
        const samePage = previousPath.current === pathname
        previousPath.current = pathname

        const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null

        if (target) target.scrollIntoView({ behavior: samePage ? 'smooth' : 'instant' })
        else if (navigationType !== 'POP') window.scrollTo({ top: 0, behavior: 'instant' })
    }, [key, pathname, hash, navigationType])

    return null
}
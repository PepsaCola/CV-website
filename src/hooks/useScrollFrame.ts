import { useEffect, useEffectEvent, useState } from 'react'
import { useLocation } from 'react-router'

/** Викликає callback не частіше разу на кадр під час скролу і зміни розміру вікна.
 *  Також одразу при монтуванні та після кожної зміни сторінки (змінюється висота документа) */
export function useScrollFrame(callback: () => void) {
    const { pathname } = useLocation()
    const run = useEffectEvent(callback)

    useEffect(() => {
        let frame = 0

        const schedule = () => {
            if (frame) return
            frame = requestAnimationFrame(() => {
                frame = 0
                run()
            })
        }

        window.addEventListener('scroll', schedule, { passive: true })
        window.addEventListener('resize', schedule)
        run()

        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', schedule)
            window.removeEventListener('resize', schedule)
        }
    }, [pathname])
}

/** true, коли сторінку прокрутили нижче за offset пікселів */
export function useScrolled(offset = 24) {
    const [scrolled, setScrolled] = useState(false)
    useScrollFrame(() => setScrolled(window.scrollY > offset))
    return scrolled
}
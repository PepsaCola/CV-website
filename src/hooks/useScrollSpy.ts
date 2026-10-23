import { useEffect, useState } from 'react'

/** Id секції, що зараз посередині екрана. Працює лише коли enabled === true */
export function useScrollSpy(ids: readonly string[], enabled: boolean) {
    const [active, setActive] = useState<string | null>(null)

    useEffect(() => {
        if (!enabled) return

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id)
                }
            },
            { rootMargin: '-45% 0px -50% 0px' },
        )

        for (const id of ids) {
            const section = document.getElementById(id)
            if (section) observer.observe(section)
        }

        return () => {
            observer.disconnect()
            setActive(null)
        }
    }, [ids, enabled])

    return active
}
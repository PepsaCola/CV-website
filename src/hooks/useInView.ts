import { useEffect, useRef, useState } from 'react'

interface Options {
    threshold?: number
    rootMargin?: string
}

/** Повертає ref і прапорець «елемент хоч раз з'явився у вікні». Далі не стежить */
export function useInView<T extends Element>({ threshold = 0.08, rootMargin = '0px 0px -8% 0px' }: Options = {}) {
    const ref = useRef<T>(null)
    const [seen, setSeen] = useState(() => typeof IntersectionObserver === 'undefined')

    useEffect(() => {
        const el = ref.current
        if (!el || seen) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return
                setSeen(true)
                observer.disconnect()
            },
            { threshold, rootMargin },
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [seen, threshold, rootMargin])

    return [ref, seen] as const
}
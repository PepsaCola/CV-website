import { useRef } from 'react'
import { useScrollFrame } from '../hooks/useScrollFrame.ts'

/** Смужка прогресу скролу зверху. Значення пишемо прямо в DOM, щоб не перерендерювати на кожен кадр */
export function ScrollProgress() {
    const ref = useRef<HTMLDivElement>(null)

    useScrollFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        ref.current?.style.setProperty('--sp', max > 0 ? (window.scrollY / max).toFixed(4) : '0')
    })

    return <div ref={ref} className="scroll-progress" aria-hidden="true" />
}
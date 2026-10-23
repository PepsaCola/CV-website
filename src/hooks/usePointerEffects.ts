import { useEffect } from 'react'
import { useHoverMotion } from './useMediaQuery.ts'

const SPOT = '.spot'
const MAGNETIC = '.btn--neon, .btn--glass'

/** Підсвітка в картках за курсором і «магнітні» кнопки.
 *  Один слухач на весь документ, тож нові картки підхоплюються самі */
export function usePointerEffects() {
    const enabled = useHoverMotion()

    useEffect(() => {
        if (!enabled) return

        const onMove = (e: PointerEvent) => {
            if (!(e.target instanceof Element)) return

            const spot = e.target.closest<HTMLElement>(SPOT)
            if (spot) {
                const rect = spot.getBoundingClientRect()
                spot.style.setProperty('--mx', `${e.clientX - rect.left}px`)
                spot.style.setProperty('--my', `${e.clientY - rect.top}px`)
            }

            const button = e.target.closest<HTMLElement>(MAGNETIC)
            if (button) {
                const rect = button.getBoundingClientRect()
                const dx = e.clientX - (rect.left + rect.width / 2)
                const dy = e.clientY - (rect.top + rect.height / 2)
                button.style.setProperty('--tx', `${(dx * 0.18).toFixed(1)}px`)
                button.style.setProperty('--ty', `${(dy * 0.28).toFixed(1)}px`)
            }
        }

        const onOut = (e: PointerEvent) => {
            if (!(e.target instanceof Element)) return

            const button = e.target.closest<HTMLElement>(MAGNETIC)
            if (!button) return
            if (e.relatedTarget instanceof Node && button.contains(e.relatedTarget)) return

            button.style.removeProperty('--tx')
            button.style.removeProperty('--ty')
        }

        document.addEventListener('pointermove', onMove, { passive: true })
        document.addEventListener('pointerout', onOut)

        return () => {
            document.removeEventListener('pointermove', onMove)
            document.removeEventListener('pointerout', onOut)
        }
    }, [enabled])
}
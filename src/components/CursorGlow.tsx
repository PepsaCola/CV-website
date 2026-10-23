import { useEffect, useRef } from 'react'
import { useHoverMotion } from '../hooks/useMediaQuery.ts'

/** М'яке світло, що наздоганяє курсор */
export function CursorGlow() {
    const ref = useRef<HTMLDivElement>(null)
    const enabled = useHoverMotion()

    useEffect(() => {
        const glow = ref.current
        if (!glow || !enabled) return

        let targetX = 0
        let targetY = 0
        let x = 0
        let y = 0
        let frame = 0

        const follow = () => {
            x += (targetX - x) * 0.12
            y += (targetY - y) * 0.12
            glow.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`
            const moving = Math.abs(targetX - x) + Math.abs(targetY - y) > 0.5
            frame = moving ? requestAnimationFrame(follow) : 0
        }

        const onMove = (e: PointerEvent) => {
            targetX = e.clientX
            targetY = e.clientY

            if (!glow.classList.contains('is-on')) {
                x = targetX
                y = targetY
                glow.classList.add('is-on')
            }

            if (!frame) frame = requestAnimationFrame(follow)
        }

        const onLeave = () => glow.classList.remove('is-on')

        window.addEventListener('pointermove', onMove, { passive: true })
        document.documentElement.addEventListener('mouseleave', onLeave)

        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('pointermove', onMove)
            document.documentElement.removeEventListener('mouseleave', onLeave)
        }
    }, [enabled])

    return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
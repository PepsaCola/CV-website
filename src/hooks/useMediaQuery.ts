import { useCallback, useSyncExternalStore } from 'react'

export function useMediaQuery(query: string) {
    const subscribe = useCallback(
        (notify: () => void) => {
            const mq = window.matchMedia(query)
            mq.addEventListener('change', notify)
            return () => mq.removeEventListener('change', notify)
        },
        [query],
    )

    return useSyncExternalStore(
        subscribe,
        () => window.matchMedia(query).matches,
        () => false,
    )
}

export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)')

/** Ефекти від курсора мають сенс лише з мишею і без вимкнених анімацій */
export function useHoverMotion() {
    const reduced = usePrefersReducedMotion()
    const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
    return !reduced && finePointer
}
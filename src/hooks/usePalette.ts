import { useLayoutEffect, useState } from 'react'

// Назви кольорів лежать у словниках (src/i18n), тут лише значення
export const PALETTES = [
    { id: 'violet', a: '#8f5bff', b: '#e6dcff' },
    { id: 'white', a: '#ffffff', b: '#b9a4ff' },
    { id: 'lilac', a: '#b266ff', b: '#f0d6ff' },
] as const

export type PaletteId = (typeof PALETTES)[number]['id']

const STORAGE_KEY = 'portfolio-palette-violet'

const isPaletteId = (value: string | null): value is PaletteId => PALETTES.some((p) => p.id === value)

function readSaved(): PaletteId {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (isPaletteId(saved)) return saved
    } catch {
        // сховище недоступне
    }
    return 'violet'
}

/** Палітра живе в атрибуті data-palette на <html>. Фіолетова є типовою і без атрибута */
export function usePalette() {
    const [palette, setPalette] = useState<PaletteId>(readSaved)

    useLayoutEffect(() => {
        const root = document.documentElement
        if (palette === 'violet') root.removeAttribute('data-palette')
        else root.setAttribute('data-palette', palette)

        try {
            localStorage.setItem(STORAGE_KEY, palette)
        } catch {
            // ігноруємо
        }
    }, [palette])

    return [palette, setPalette] as const
}
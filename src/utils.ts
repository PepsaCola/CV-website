import type { CSSProperties } from 'react'

/** Склеює класи, пропускаючи порожні значення */
export const cx = (...parts: (string | false | null | undefined)[]) => parts.filter(Boolean).join(' ') || undefined

/** CSS-змінні в style: React не знає про власні властивості, тому типізуємо їх тут */
export const cssVars = (vars: Record<`--${string}`, string | number>) => vars as CSSProperties
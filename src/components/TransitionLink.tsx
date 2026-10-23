import { Link, type LinkProps } from 'react-router'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.ts'

/** Посилання між сторінками з плавним переходом (View Transitions API).
 *  Прев'ю проєкту розтягується у вікно перегляду завдяки однаковому view-transition-name */
export function TransitionLink(props: LinkProps) {
    const reduced = usePrefersReducedMotion()
    return <Link viewTransition={!reduced} {...props} />
}
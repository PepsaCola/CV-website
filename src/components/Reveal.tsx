import type { ComponentPropsWithoutRef, CSSProperties, ElementType } from 'react'
import { useInView } from '../hooks/useInView.ts'
import { cssVars, cx } from '../utils.ts'

type RevealProps<T extends ElementType> = {
    as?: T
    /** Затримка появи в секундах */
    delay?: number
    className?: string
    style?: CSSProperties
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'delay' | 'className' | 'style'>

/** Блок, що плавно з'являється, коли потрапляє у вікно. Стилі: [data-reveal] у motion.css */
export function Reveal<T extends ElementType = 'div'>({ as, delay, className, style, ...rest }: RevealProps<T>) {
    const [ref, seen] = useInView<HTMLElement>()
    const Tag: ElementType = as ?? 'div'

    return (
        <Tag
            {...rest}
            ref={ref}
            data-reveal=""
            className={cx(className, seen && 'is-in')}
            style={delay ? { ...style, ...cssVars({ '--d': `${delay}s` }) } : style}
        />
    )
}
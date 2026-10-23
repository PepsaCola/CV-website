import { Fragment, useRef, type PointerEvent } from 'react'
import { Link } from 'react-router'
import { useHoverMotion } from '../../hooks/useMediaQuery.ts'
import { useI18n } from '../../i18n/LanguageContext.ts'
import { renderNeon } from '../../i18n/neon.tsx'
import { cssVars } from '../../utils.ts'
import { ArrowDown } from '../Icons.tsx'

type Tone = 'k' | 'v' | 'm' | 'p' | 's' | 'n'
type Token = string | [tone: Tone, text: string]
interface CodeLine {
    tokens: Token[]
    caret?: boolean
}

// Код-вікно однакове для всіх мов
const codeLines: CodeLine[] = [
    { tokens: [['k', 'const'], ' ', ['v', 'kyrylo'], ' ', ['m', '='], ' ', ['m', '{']] },
    { tokens: ['  ', ['p', 'role'], ['m', ':'], ' ', ['s', '"Frontend developer"'], ['m', ',']] },
    {
        tokens: ['  ', ['p', 'stack'], ['m', ':'], ' ', ['m', '['], ['s', '"React"'], ['m', ','], ' ', ['s', '"TS"'], ['m', ','], ' ', ['s', '"Next.js"'], ['m', '],']],
    },
    { tokens: ['  ', ['p', 'freelance'], ['m', ':'], ' ', ['s', '"since 2024"'], ['m', ',']] },
    { tokens: ['  ', ['p', 'location'], ['m', ':'], ' ', ['s', '"Halle (Saale)"'], ['m', ',']] },
    { tokens: ['  ', ['p', 'status'], ['m', ':'], ' ', ['s', '"open to work"'], ['m', ',']] },
    { tokens: [['m', '};']], caret: true },
]

// Кожен рядок «друкується» за кількістю символів: --n задає кроки, --t затримку старту
const typedLines = (() => {
    let start = 500
    return codeLines.map((line) => {
        const length =
            line.tokens.reduce((sum, token) => sum + (typeof token === 'string' ? token.length : token[1].length), 0) +
            (line.caret ? 1 : 0)
        const current = { ...line, length, start }
        start += length * 14 + 40
        return current
    })
})()

export function Hero() {
    const { t } = useI18n()
    const motion = useHoverMotion()
    const asideRef = useRef<HTMLDivElement>(null)

    // Код-вікно злегка нахиляється слідом за курсором
    const tilt = (e: PointerEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const nx = (e.clientX - rect.left) / rect.width - 0.5
        const ny = (e.clientY - rect.top) / rect.height - 0.5
        asideRef.current?.style.setProperty('--ry', `${(nx * 8).toFixed(2)}deg`)
        asideRef.current?.style.setProperty('--rx', `${(-ny * 6).toFixed(2)}deg`)
    }

    const resetTilt = () => {
        asideRef.current?.style.removeProperty('--ry')
        asideRef.current?.style.removeProperty('--rx')
    }

    return (
        <section
            className="hero"
            aria-labelledby="hero-title"
            onPointerMove={motion ? tilt : undefined}
            onPointerLeave={motion ? resetTilt : undefined}
        >
            <div className="wrap hero__grid">
                <div className="hero__main">
                    <p className="status">
                        <span className="status__dot" aria-hidden="true" />
                        {t.hero.status}
                    </p>

                    <h1 className="hero__title" id="hero-title">
                        {t.hero.title.map((word, i) => (
                            <Fragment key={i}>
                                {i > 0 && ' '}
                                <span className="w">
                  <span className="w__in" style={cssVars({ '--i': i })}>
                    {renderNeon(word)}
                  </span>
                </span>
                            </Fragment>
                        ))}
                    </h1>

                    <p className="hero__lead">{t.hero.lead}</p>

                    <div className="hero__actions">
                        <Link className="btn btn--neon" to="#work">
                            {t.hero.viewWork}
                            <ArrowDown />
                        </Link>
                        <Link className="btn btn--glass" to="#contact">
                            {t.hero.discuss}
                        </Link>
                    </div>

                    <ul className="hero__chips" aria-label={t.hero.chipsLabel}>
                        {t.hero.chips.map((chip) => (
                            <li key={chip}>{chip}</li>
                        ))}
                    </ul>
                </div>

                <div className="hero__aside" ref={asideRef}>
                    <div className="code" role="img" aria-label={t.hero.codeLabel}>
                        <div className="code__bar" aria-hidden="true">
                            <span className="code__dot" />
                            <span className="code__dot" />
                            <span className="code__dot" />
                            <span className="code__file">kyrylo.ts</span>
                        </div>
                        <pre aria-hidden="true">
              <code>
                {typedLines.map((line, i) => (
                    <span className="ln" key={i} style={cssVars({ '--n': line.length, '--t': `${line.start}ms` })}>
                    {line.tokens.map((token, j) =>
                        typeof token === 'string' ? (
                            <Fragment key={j}>{token}</Fragment>
                        ) : (
                            <span key={j} className={`c-${token[0]}`}>
                          {token[1]}
                        </span>
                        ),
                    )}
                        {line.caret && <span className="caret" />}
                  </span>
                ))}
              </code>
            </pre>
                    </div>

                    <p className="float-chip float-chip--a">
                        <span className="float-chip__dot" aria-hidden="true" />
                        {t.hero.floatA}
                    </p>
                    <p className="float-chip float-chip--b">
                        <span className="float-chip__dot" aria-hidden="true" />
                        {t.hero.floatB}
                    </p>
                </div>
            </div>
        </section>
    )
}
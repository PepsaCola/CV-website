/** Спільні градієнти й фільтри для ілюстрацій проєктів (див. ProjectThumb) */
export function SvgDefs() {
    return (
        <svg className="defs" width="0" height="0" aria-hidden="true" focusable="false">
            <defs>
                <linearGradient id="g-line" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="400" y2="0">
                    <stop offset="0" style={{ stopColor: 'var(--neon-1)' }} />
                    <stop offset="1" style={{ stopColor: 'var(--neon-2)' }} />
                </linearGradient>
                <linearGradient id="g-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" style={{ stopColor: 'var(--neon-1)', stopOpacity: 0.5 }} />
                    <stop offset="1" style={{ stopColor: 'var(--neon-1)', stopOpacity: 0 }} />
                </linearGradient>
                <linearGradient id="g-sun" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" style={{ stopColor: 'var(--neon-2)' }} />
                    <stop offset="1" style={{ stopColor: 'var(--neon-1)' }} />
                </linearGradient>
                <radialGradient id="g-planet" cx=".35" cy=".3" r=".85">
                    <stop offset="0" style={{ stopColor: 'var(--neon-2)' }} />
                    <stop offset="1" style={{ stopColor: 'var(--neon-1)' }} />
                </radialGradient>
                <radialGradient id="g-bg" cx=".5" cy=".45" r=".75">
                    <stop offset="0" style={{ stopColor: 'color-mix(in srgb, var(--neon-1) 26%, var(--bg))' }} />
                    <stop offset="1" style={{ stopColor: 'var(--bg)' }} />
                </radialGradient>
                <filter id="f-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="b" />
                    <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <mask id="m-sun" maskUnits="userSpaceOnUse" x="100" y="60" width="200" height="160">
                    <rect x="100" y="60" width="200" height="160" fill="#fff" />
                    <rect x="100" y="152" width="200" height="4" fill="#000" />
                    <rect x="100" y="165" width="200" height="5" fill="#000" />
                    <rect x="100" y="179" width="200" height="6" fill="#000" />
                    <rect x="100" y="194" width="200" height="8" fill="#000" />
                </mask>
            </defs>
        </svg>
    )
}
import type { ReactElement } from 'react'
import type { ProjectSlug } from '../data/projects.ts'

const thumbs: Record<ProjectSlug, ReactElement> = {
    taskpro: (
        <>
            <path className="t-grid" d="M0 70H400M0 120H400M0 170H400M0 220H400" />
            {/* Три колонки */}
            <rect className="t-tower t-tower--1" x="60" y="62" width="86" height="176" rx="9" />
            <rect className="t-tower t-tower--2" x="157" y="62" width="86" height="176" rx="9" />
            <rect className="t-tower t-tower--1" x="254" y="62" width="86" height="176" rx="9" />
            <rect className="t-win" x="70" y="75" width="34" height="5" rx="2.5" />
            <rect className="t-win" x="167" y="75" width="34" height="5" rx="2.5" />
            <rect className="t-win" x="264" y="75" width="34" height="5" rx="2.5" />
            {/* Картки в колонках */}
            <rect className="t-win t-win--dim" x="70" y="92" width="66" height="30" rx="6" />
            <rect className="t-win t-win--dim" x="70" y="130" width="66" height="30" rx="6" />
            <rect className="t-win t-win--dim" x="70" y="168" width="66" height="30" rx="6" />
            <rect className="t-win t-win--dim" x="167" y="92" width="66" height="30" rx="6" />
            <rect className="t-win t-win--dim" x="167" y="130" width="66" height="30" rx="6" />
            <rect className="t-win t-win--dim" x="264" y="92" width="66" height="30" rx="6" />
            {/* Картка, яку переносять між колонками */}
            <g transform="rotate(-6 262 178)">
                <rect x="226" y="150" width="70" height="34" rx="7" fill="var(--bg)" stroke="url(#g-line)" strokeWidth="2" filter="url(#f-glow)" />
                <rect className="t-win" x="235" y="159" width="32" height="4" rx="2" />
                <rect className="t-win t-win--dim" x="235" y="168" width="46" height="3" rx="1.5" />
                <circle className="t-dot" cx="286" cy="160" r="3" />
            </g>
        </>
    ),
    kidsstory: (
        <>
            <circle className="t-star" cx="70" cy="95" r="1.5" />
            <circle className="t-star" cx="335" cy="85" r="1.5" />
            <circle className="t-star" cx="92" cy="160" r="1.2" />
            <circle className="t-star" cx="322" cy="150" r="1.2" />
            <circle className="t-star" cx="345" cy="205" r="1" />
            <g transform="translate(0 14)">
                {/* Зірка над пірамідою */}
                <polygon
                    points="200,36 204.1,46.3 215.2,47.1 206.7,54.2 209.4,64.9 200,59 190.6,64.9 193.3,54.2 184.8,47.1 195.9,46.3"
                    fill="url(#g-sun)"
                    strokeLinejoin="round"
                    filter="url(#f-glow)"
                />
                {/* Піраміда з кубиків */}
                <rect className="t-tower t-tower--1" x="105" y="160" width="90" height="80" rx="8" />
                <circle className="t-ring" cx="150" cy="200" r="20" />
                <rect className="t-tower t-tower--2" x="205" y="160" width="90" height="80" rx="8" />
                <path className="t-soft" d="M250 178L274 222H226Z" strokeLinejoin="round" />
                <g transform="rotate(-8 200 120)">
                    <rect className="t-tower t-tower--1" x="155" y="80" width="90" height="80" rx="8" />
                    <rect className="t-soft" x="178" y="102" width="44" height="36" rx="5" />
                </g>
                <path d="M50 240H350" stroke="url(#g-line)" strokeWidth="2" strokeLinecap="round" filter="url(#f-glow)" />
            </g>
        </>
    ),
    barbershop: (
        <>
            <circle className="t-star" cx="80" cy="90" r="1.5" />
            <circle className="t-star" cx="320" cy="80" r="1.5" />
            <circle className="t-star" cx="110" cy="200" r="1.2" />
            <circle className="t-star" cx="300" cy="190" r="1.2" />
            <circle cx="200" cy="150" r="72" fill="url(#g-planet)" style={{ opacity: 0.16 }} filter="url(#f-glow)" />
            <defs>
                <clipPath id="c-pole">
                    <rect x="176" y="84" width="48" height="136" rx="10" />
                </clipPath>
            </defs>
            {/* Барберський стовп */}
            <rect className="t-tower t-tower--1" x="176" y="84" width="48" height="136" rx="10" />
            <g clipPath="url(#c-pole)">
                <path className="t-soft" style={{ strokeWidth: 10 }} d="M160 120L240 80M160 160L240 120M160 200L240 160M160 240L240 200" />
            </g>
            <rect className="t-tower t-tower--2" x="168" y="66" width="64" height="18" rx="6" />
            <rect className="t-tower t-tower--2" x="168" y="220" width="64" height="18" rx="6" />
            <circle className="t-dot" cx="200" cy="52" r="4" />
            <path d="M90 250H310" stroke="url(#g-line)" strokeWidth="2" strokeLinecap="round" filter="url(#f-glow)" />
        </>
    ),
}

/** Ілюстрація-прев'ю проєкту. Градієнти й фільтри беруться з SvgDefs */
export function ProjectThumb({ slug }: { slug: ProjectSlug }) {
    return (
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="400" height="300" fill="url(#g-bg)" />
            {thumbs[slug]}
        </svg>
    )
}
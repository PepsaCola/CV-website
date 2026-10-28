import type { ReactElement } from 'react'
import type { ProjectSlug } from '../data/projects.ts'

const thumbs: Record<ProjectSlug, ReactElement> = {
    onlinemarket: (
        <>
            <path className="t-grid" d="M0 70H400M0 120H400M0 170H400M0 220H400" />
            {/* Сітка карток товарів */}
            <rect className="t-tower t-tower--1" x="60" y="70" width="80" height="100" rx="9" />
            <rect className="t-tower t-tower--2" x="152" y="70" width="80" height="100" rx="9" />
            <rect className="t-tower t-tower--1" x="60" y="182" width="80" height="58" rx="9" />
            <rect className="t-tower t-tower--2" x="152" y="182" width="80" height="58" rx="9" />
            <rect className="t-soft" x="72" y="82" width="56" height="46" rx="6" />
            <rect className="t-soft" x="164" y="82" width="56" height="46" rx="6" />
            <rect className="t-win" x="72" y="138" width="40" height="5" rx="2.5" />
            <rect className="t-win" x="164" y="138" width="40" height="5" rx="2.5" />
            <rect className="t-win t-win--dim" x="72" y="150" width="26" height="4" rx="2" />
            <rect className="t-win t-win--dim" x="164" y="150" width="26" height="4" rx="2" />
            {/* Кошик із лічильником */}
            <g filter="url(#f-glow)">
                <path d="M262 112H278L292 182H340L352 132H284" fill="none" stroke="url(#g-line)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="300" cy="200" r="7" fill="url(#g-sun)" />
                <circle cx="332" cy="200" r="7" fill="url(#g-sun)" />
            </g>
            <circle className="t-dot" cx="350" cy="110" r="10" />
        </>
    ),
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
    fleetops: (
        <>
            <path className="t-grid" d="M0 70H400M0 120H400M0 170H400M80 0V215M160 0V215M240 0V215M320 0V215" />
            {/* Маршрут на карті й авто на ньому */}
            <path d="M60 190C110 110 150 210 205 150S300 80 345 100" fill="none" stroke="url(#g-line)" strokeWidth="3" strokeLinecap="round" filter="url(#f-glow)" />
            <circle className="t-ring" cx="132" cy="165" r="14" />
            <circle className="t-dot" cx="132" cy="165" r="5" />
            <circle className="t-dot" cx="268" cy="108" r="5" />
            <circle cx="345" cy="100" r="8" fill="url(#g-sun)" filter="url(#f-glow)" />
            {/* Дошка диспетчера: рейси на шкалі часу */}
            <rect className="t-tower t-tower--1" x="60" y="232" width="112" height="14" rx="7" />
            <rect className="t-tower t-tower--2" x="186" y="232" width="74" height="14" rx="7" />
            <rect className="t-tower t-tower--2" x="96" y="256" width="88" height="14" rx="7" />
            <rect className="t-tower t-tower--1" x="200" y="256" width="140" height="14" rx="7" />
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
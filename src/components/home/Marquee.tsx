import { technologies } from '../../data/site.ts'

export function Marquee() {
    return (
        <div className="marquee" role="group" aria-label="Технології, з якими працюю">
            <div className="marquee__track">
                <ul className="marquee__list">
                    {technologies.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
                {/* Копія для безшовного циклу стрічки */}
                <ul className="marquee__list" aria-hidden="true">
                    {technologies.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
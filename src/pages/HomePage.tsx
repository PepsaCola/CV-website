import { About } from '../components/home/About.tsx'
import { Contact } from '../components/home/Contact.tsx'
import { Experience } from '../components/home/Experience.tsx'
import { Hero } from '../components/home/Hero.tsx'
import { Marquee } from '../components/home/Marquee.tsx'
import { Work } from '../components/home/Work.tsx'
import { SvgDefs } from '../components/SvgDefs.tsx'
import { useI18n } from '../i18n/LanguageContext.ts'

export function HomePage() {
    const { t } = useI18n()

    return (
        <>
            <title>{t.meta.homeTitle}</title>
            <meta name="description" content={t.meta.description} />

            <SvgDefs />
            <main id="top">
                <Hero />
                <Marquee />
                <Work />
                <About />
                <Experience />
                <Contact />
            </main>
        </>
    )
}
import { projects } from '../../data/projects.ts'
import { archive } from '../../data/site.ts'
import { useI18n } from '../../i18n/LanguageContext.ts'
import { plural } from '../../i18n/utils.ts'
import { ArrowUpRight } from '../Icons.tsx'
import { ProjectThumb } from '../ProjectThumb.tsx'
import { Reveal } from '../Reveal.tsx'
import { TransitionLink } from '../TransitionLink.tsx'

const years = projects.map((project) => project.year)

export function Work() {
    const { lang, t } = useI18n()

    return (
        <section className="section" id="work" aria-labelledby="work-title">
            <div className="wrap">
                <Reveal as="header" className="section__head">
                    <div>
                        <p className="eyebrow">{t.work.eyebrow}</p>
                        <h2 className="h2" id="work-title">
                            {t.work.title}
                        </h2>
                    </div>
                    <p className="label muted">
                        {plural(lang, t.work.count, projects.length)} · {Math.min(...years)} — {Math.max(...years)}
                    </p>
                </Reveal>

                <div className="projects">
                    {projects.map((project, i) => (
                        <Reveal as="article" className="project" delay={i % 2 ? 0.12 : undefined} key={project.slug}>
                            <TransitionLink className="project__link spot" to={`/projects/${project.slug}`}>
                                <div className="thumb" style={{ viewTransitionName: `vt-${project.slug}` }}>
                                    <ProjectThumb slug={project.slug} />
                                    <span className="circle-arrow" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                                </div>
                                <div className="project__body">
                                    <div className="project__top">
                                        <h3 className="project__title">{project.title}</h3>
                                        <span className="project__year label">{project.year}</span>
                                    </div>
                                    <p className="project__desc">{t.projects[project.slug].desc}</p>
                                    <ul className="tags" aria-label={t.work.techLabel}>
                                        {project.tags.map((tag) => (
                                            <li key={tag}>{tag}</li>
                                        ))}
                                    </ul>
                                </div>
                            </TransitionLink>
                        </Reveal>
                    ))}
                </div>

                <h3 className="label muted archive__title">{t.work.archive}</h3>
                <Reveal as="ul" className="archive">
                    {archive.map((item) => (
                        <li key={item.id}>
                            <a href={item.href} target="_blank" rel="noopener">
                                <span className="archive__name">{item.name}</span>
                                <span className="archive__type">{t.work.archiveTypes[item.id]}</span>
                                <span className="archive__tech">{item.tech}</span>
                                <span className="archive__year label">{item.year}</span>
                                <span className="archive__go" aria-hidden="true">
                  <ArrowUpRight />
                </span>
                            </a>
                        </li>
                    ))}
                </Reveal>
            </div>
        </section>
    )
}
import { useParams } from 'react-router'
import { ProjectViewer } from '../components/ProjectViewer.tsx'
import { Reveal } from '../components/Reveal.tsx'
import { TransitionLink } from '../components/TransitionLink.tsx'
import { projects, type Project } from '../data/projects.ts'
import { profile } from '../data/site.ts'
import { useI18n } from '../i18n/LanguageContext.ts'
import { cssVars } from '../utils.ts'
import { NotFoundPage } from './NotFoundPage.tsx'

export function ProjectPage() {
    const { slug } = useParams()
    const index = projects.findIndex((project) => project.slug === slug)

    if (index === -1) return <NotFoundPage />

    const prev = projects[(index - 1 + projects.length) % projects.length]
    const next = projects[(index + 1) % projects.length]

    // key скидає стан сторінки (розмір вікна, анімації) при переході між проєктами
    return <ProjectView key={slug} project={projects[index]} prev={prev} next={next} />
}

function ProjectView({ project, prev, next }: { project: Project; prev: Project; next: Project }) {
    const { t } = useI18n()
    const text = t.projects[project.slug]
    const labels = t.project

    const briefs = [
        { label: labels.about.task, text: text.brief.task, delay: 0 },
        { label: labels.about.solution, text: text.brief.solution, delay: 0.1 },
        { label: labels.about.result, text: text.brief.result, delay: 0.2 },
    ]

    return (
        <>
            <title>{`${project.title} — ${profile.name}`}</title>
            <meta name="description" content={text.desc} />

            <main id="top">
                <section className="proj-hero" aria-labelledby="proj-title">
                    <div className="wrap">
                        <TransitionLink className="back" to="/#work">
                            {labels.back}
                        </TransitionLink>
                        <p className="eyebrow">
                            {labels.eyebrow} · {project.year}
                        </p>
                        <h1 className="proj-title" id="proj-title">
              <span className="w">
                <span className="w__in" style={cssVars({ '--i': 0 })}>
                  {project.title}
                </span>
              </span>
                        </h1>
                        <p className="proj-lead">{text.desc}</p>

                        <dl className="proj-meta">
                            <div>
                                <dt className="label">{labels.meta.role}</dt>
                                <dd>{text.role}</dd>
                            </div>
                            <div>
                                <dt className="label">{labels.meta.year}</dt>
                                <dd>{project.year}</dd>
                            </div>
                            <div>
                                <dt className="label">{labels.meta.stack}</dt>
                                <dd>{project.tags.join(', ')}</dd>
                            </div>
                            <div>
                                <dt className="label">{labels.meta.status}</dt>
                                <dd className="proj-status">{text.status}</dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <ProjectViewer project={project} />

                <section className="section" aria-labelledby="about-proj-title" style={{ paddingTop: 0 }}>
                    <div className="wrap">
                        <Reveal as="header" className="section__head">
                            <div>
                                <p className="eyebrow">{labels.about.eyebrow}</p>
                                <h2 className="h2" id="about-proj-title">
                                    {labels.about.title}
                                </h2>
                            </div>
                        </Reveal>

                        <div className="proj-grid">
                            {briefs.map((item) => (
                                <Reveal className="tile spot" delay={item.delay} key={item.label}>
                                    <p className="label">{item.label}</p>
                                    <p>{item.text}</p>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal className="proj-tags">
                            <ul className="tags" aria-label={t.work.techLabel}>
                                {project.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </section>

                <nav className="proj-pager" aria-label={labels.pager.label}>
                    <div className="wrap">
                        <div className="proj-pager__grid">
                            <Reveal as={TransitionLink} className="pager-link pager-link--prev" to={`/projects/${prev.slug}`}>
                                <span className="label muted">{labels.pager.prev}</span>
                                <span className="pager-link__title">{prev.title}</span>
                                <span className="label muted">{prev.year}</span>
                            </Reveal>
                            <Reveal as={TransitionLink} className="pager-link pager-link--next" delay={0.1} to={`/projects/${next.slug}`}>
                                <span className="label muted">{labels.pager.next}</span>
                                <span className="pager-link__title">{next.title}</span>
                                <span className="label muted">{next.year}</span>
                            </Reveal>
                        </div>
                    </div>
                </nav>
            </main>
        </>
    )
}
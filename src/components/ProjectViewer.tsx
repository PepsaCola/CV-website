import { useEffect, useState } from 'react'
import type { Project } from '../data/projects.ts'
import { useI18n } from '../i18n/LanguageContext.ts'
import { fmt } from '../i18n/utils.ts'
import { Lock, Reload, ArrowUpRight } from './Icons.tsx'

type Size = 'desktop' | 'tablet' | 'mobile'

const sizeIds: Size[] = ['desktop', 'tablet', 'mobile']

/** Вікно браузера з задеплоєним проєктом: розмір, оновлення, індикатор завантаження */
export function ProjectViewer({ project }: { project: Project }) {
    const { t } = useI18n()
    const text = t.project.viewer
    const [size, setSize] = useState<Size>('desktop')
    const [loading, setLoading] = useState(true)
    const [reloadKey, setReloadKey] = useState(0)

    // Якщо сайт не повідомив про завершення, не тримаємо індикатор вічно
    useEffect(() => {
        if (!loading) return
        const id = window.setTimeout(() => setLoading(false), 3500)
        return () => window.clearTimeout(id)
    }, [loading, reloadKey])

    const reload = () => {
        setLoading(true)
        setReloadKey((key) => key + 1)
    }

    return (
        <section className="viewer-section" aria-label={text.label}>
            <div className="wrap">
                <div className="viewer">
                    <div className="viewer__toolbar">
                        <div className="viewer__dots" aria-hidden="true">
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className="viewer__url">
                            <Lock />
                            <span>{project.liveUrl}</span>
                        </div>

                        <div className="viewer__sizes" role="group" aria-label={text.sizesLabel}>
                            {sizeIds.map((id) => (
                                <button
                                    className="size-btn"
                                    type="button"
                                    key={id}
                                    aria-pressed={size === id}
                                    onClick={() => setSize(id)}
                                >
                                    {text.sizes[id]}
                                </button>
                            ))}
                        </div>

                        <button className="tool-btn" type="button" aria-label={text.reload} onClick={reload}>
                            <Reload />
                        </button>
                        <a className="tool-btn" href={project.embedUrl} target="_blank" rel="noopener" aria-label={text.openTab}>
                            <ArrowUpRight />
                        </a>
                    </div>

                    <div className="viewer__stage">
                        <div className="viewer__window" data-size={size} style={{ viewTransitionName: `vt-${project.slug}` }}>
                            <iframe
                                key={reloadKey}
                                src={project.embedUrl}
                                title={fmt(text.iframeTitle, { title: project.title })}
                                referrerPolicy="no-referrer"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                                onLoad={() => setLoading(false)}
                            />
                            {loading && (
                                <div className="viewer__loading" role="status">
                                    {text.loading}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <p className="viewer__hint">
                    {text.hint}{' '}
                    <a href={project.embedUrl} target="_blank" rel="noopener">
                        {text.hintOpen}
                    </a>
                    {' · '}
                    <a href={project.repoUrl} target="_blank" rel="noopener">
                        {text.hintCode}
                    </a>
                </p>
            </div>
        </section>
    )
}
import { PALETTES, usePalette } from '../hooks/usePalette.ts'
import { useI18n } from '../i18n/LanguageContext.ts'
import { cssVars } from '../utils.ts'

/** Тимчасова панель макета. У фінальному сайті приберіть її разом із рядком у Layout.tsx */
export function PaletteSwitch() {
    const [palette, setPalette] = usePalette()
    const { t } = useI18n()

    return (
        <div className="palette-switch" data-mockup-only="">
            <span className="label">{t.palette.label}</span>
            {PALETTES.map((item) => (
                <button
                    key={item.id}
                    type="button"
                    className="swatch"
                    aria-label={t.palette.names[item.id]}
                    aria-pressed={palette === item.id}
                    style={cssVars({ '--sw-a': item.a, '--sw-b': item.b })}
                    onClick={() => setPalette(item.id)}
                />
            ))}
        </div>
    )
}
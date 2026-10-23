import type { Lang, PluralForms } from './types.ts'

/** Підставляє {name} у шаблон */
export const fmt = (template: string, vars: Record<string, string | number>) =>
    template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ''))

/** Вибирає форму множини для мови (1 проєкт, 3 проєкти, 5 проєктів) */
export function plural(lang: Lang, forms: PluralForms, n: number) {
    const rule = new Intl.PluralRules(lang).select(n)
    return fmt(forms[rule as keyof PluralForms] ?? forms.other, { n })
}
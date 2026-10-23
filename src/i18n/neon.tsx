import type { ReactNode } from 'react'

/** Перетворює слова в *зірочках* на підсвічені неоном фрагменти */
export function renderNeon(text: string): ReactNode[] {
    return text.split(/\*([^*]+)\*/).map((part, i) =>
        i % 2 ? (
            <span className="neon" key={i}>
        {part}
      </span>
        ) : (
            part
        ),
    )
}
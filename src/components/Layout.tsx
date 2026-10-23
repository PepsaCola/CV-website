import { Outlet } from 'react-router'
import { usePointerEffects } from '../hooks/usePointerEffects.ts'
import { CursorGlow } from './CursorGlow.tsx'
import { Footer } from './Footer.tsx'
import { Header } from './Header.tsx'
import { PaletteSwitch } from './PaletteSwitch.tsx'
import { ScrollManager } from './ScrollManager.tsx'
import { ScrollProgress } from './ScrollProgress.tsx'

export function Layout() {
    usePointerEffects()

    return (
        <>
            <ScrollManager />
            <ScrollProgress />
            <CursorGlow />
            <Header />
            <Outlet />
            <Footer />
            <PaletteSwitch />
        </>
    )
}
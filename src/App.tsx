import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from './components/Layout.tsx'
import { LanguageProvider } from './i18n/LanguageProvider.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { ProjectPage } from './pages/ProjectPage.tsx'

// Data router потрібен для плавних переходів між сторінками (viewTransition)
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects/:slug', element: <ProjectPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export function App() {
  return (
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
  )
}
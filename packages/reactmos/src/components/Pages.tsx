import { Suspense } from 'react'
import { BrowserRouter, useRoutes, RouteObject } from 'react-router'
import { getRoutes } from 'virtual:modules'

type AppRoutesProps = {
  pages: RouteObject[]
}
function AppRoutes({ pages }: AppRoutesProps) {
  return useRoutes(pages)
}

export default function Pages() {
  const pages = getRoutes();
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <AppRoutes pages={pages} />
      </Suspense>
    </BrowserRouter>
  )
}
import React, { lazy, Suspense } from "react"

import { createBrowserRouter } from "react-router-dom"

import App from '@/App'
import Home from '@/components/Home'
// import LazyProduct from '@/components/LazyProduct'
import About from '@/components/About'
import History from '@/components/History'

const LazyProduct = lazy(() => import('@/components/LazyProduct'))

const routes: Array<any> = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'product',
        element: <Suspense fallback={ null }><LazyProduct /></Suspense>
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: 'history',
            element: <History />
          },
          {
            path: 'record',
            element: <div>record page...</div>
          }
        ]
      },
    ]
  },
  {
    path: '*',
    element: <div>404</div>
  }
]

const router = createBrowserRouter(routes)

export default router
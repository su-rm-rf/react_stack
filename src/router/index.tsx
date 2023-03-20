import React, { lazy, Suspense } from "react"
import loadable from 'react-loadable'

import { createBrowserRouter } from "react-router-dom"

import pkg from '../../package.json'
import App from '@/App'
import Home from '@/components/Home'
// import LazyProduct from '@/components/LazyProduct'
import About from '@/components/About'
import History from '@/components/History'
import TodoList from "@/components/TodoList"

interface Router {
  name?: string,
  path: string,
  children?: Array<Router>,
  element: any
}

const LazyProduct = lazy(() => import('@/components/LazyProduct'))
const LazyAbc = loadable({
  loader: () => import('@/components/PreList'),
  loading: () => <div>加载中。。。</div>
})

const routes: Array<Router> = [
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
        element: <Suspense fallback={ null }><LazyProduct /></Suspense>,
        children: [
          {
            path: 'abc',
            element: <LazyAbc />
          }
        ]
      },
      {
        path: 'todolist',
        element: <TodoList />
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
      {
        path: '*',
        element: <div>404</div>
      }
    ]
  },
]

const router = createBrowserRouter(routes, {
  basename: pkg.publicPath
})

export default router

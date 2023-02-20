import React from "react"

import { createBrowserRouter } from "react-router-dom"

import App from '../App'
import Home from '../components/Home'
import About from '../components/About'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
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
import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'
import router from './router'

// console.log(process.env.NODE_ENV)
// console.log(process.env.BASE_ENV)
createRoot(document.querySelector('#root'))
.render(
  <Provider store={ store }>
    <RouterProvider router={ router } />
  </Provider>
)
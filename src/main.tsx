import _ from 'lodash'
import axios from 'axios' 
import React from 'react'
import {createRoot} from 'react-dom/client'

import App from './App'

console.log(_)
console.log(axios)
console.log(React)
console.log(process.env.NODE_ENV)
console.log(process.env.BASE_ENV)
createRoot(document.querySelector('#root'))
.render(<App />)
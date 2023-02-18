import React, { useState, useEffect} from 'react'

import axios from 'axios'
import Home from './components/Home'

import './app.scss'

export default function App() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    // axios.get('/api').then(res => {
    //   setMsg(res.data)
    // })

    const getMsg = async () => {
      const data = await axios.get('/api')
      setMsg(data.data)
    }
    getMsg()
  }, [])

  return <div>
    <Home />
    <div>hello app {msg}.</div>
  </div>
}
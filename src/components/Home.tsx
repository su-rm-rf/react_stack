import React, { useState, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { add, del } from '@/store/reducers'

import axios from 'axios'

import BS from '@/assets/blog-ssr.png'
import LG from '@/assets/logo.png'

export default function Home() {
  const num = useAppSelector(state => state.xx.num)
  const dispatch = useAppDispatch()

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

  return (
    <div className="home">
      <div>
        Home Page {msg}.. 
      </div>
      <div>
        <button onClick={() => dispatch(add())}>添加</button>
        {num}
        <button onClick={() => dispatch(del())}>删除</button>
      </div>
      <div>
        <img src={LG} width="100" />
        <img src={BS} />
        <div className="logo"></div>
      </div>
    </div>
  )
}
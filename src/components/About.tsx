import React, { useState, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../store/hooks'
import { add, del } from '../store/reducers'

import axios from 'axios'

export default function About() {
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
    <div className="about">
      about {msg}. {num}
      <button onClick={() => dispatch(add())}>添加</button>
      <button onClick={() => dispatch(del())}>删除</button>
    </div>
  )
}
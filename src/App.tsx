import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'

import '@/css/app.scss'

export default function App() {
  return (
    <div className='app'>
      <nav className='nav_header'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/product'>Product</NavLink>
        <NavLink to='/todolist'>TodoList</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
      <div className='body_content'>
        <Outlet />
      </div>
    </div>
  )
}

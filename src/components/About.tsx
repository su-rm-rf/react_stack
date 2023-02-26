import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div className="about">
      about page.
      <Link to="history">history</Link>
      <Link to="record">record</Link>
      <Outlet />
    </div>
  )
}
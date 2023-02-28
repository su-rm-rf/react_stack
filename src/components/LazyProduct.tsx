import React, { lazy, Suspense, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = lazy(() => import('@/components/LazyProduct'))

const PreList = lazy(() => import(
  /* webpackChunkName: "PreList" */
  /* webpackPrefetch: true */
  // /* webpackPreload: true */
  '@/components/PreList'
))

export default function LazyProduct() {
  const [show, setShow] = useState(false)

  const getRes = () => {
    import('../css/lazy.scss')
    setShow(true)
  }

  return (
    <div className='product-wrap'>
      <div onClick={getRes} className='red'>
        lazy product...
      </div>
      <Link to="abc">abc</Link>
      <Outlet />
      <div className='product-lazy'>
        {show && (
          <Suspense fallback={null}>
            <Product />
          </Suspense>
        )}
        {show && (
          <Suspense fallback={null}>
            <PreList />
          </Suspense>
        )}
      </div>
    </div>
  )
}

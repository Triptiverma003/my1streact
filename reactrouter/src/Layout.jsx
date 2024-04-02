import React from 'react'
import { Outlet } from 'react-router-dom'
import header from './components/Header/header'
import footer from './components/Footer/footer'
function Layout() {
  return (
    <div>
      <header/>
      <Outlet/>
      <footer/>

    </div>
  )
}

export default Layout

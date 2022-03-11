import React from 'react'
import { Fragment } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <Fragment>
        <Navbar />
        {children}
        <Footer />
    </Fragment>
  )
}

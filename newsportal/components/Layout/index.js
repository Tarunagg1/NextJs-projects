import React from 'react'
import styles from '../../styles/Home.module.css';
import Navigation from '../Navigation';
import Head from 'next/Head';
import { Fragment } from 'react/cjs/react.development';
import 'bootstrap/dist/css/bootstrap.css'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet" />
      </Head>
      <Navigation />
      {children}
    </Fragment>
  )
}

import React from 'react'
import styles from '../../styles/Home.module.css';
import Navigation from '../Navigation';
import Head from 'next/Head';
import { Fragment } from 'react/cjs/react.development';
import 'bootstrap/dist/css/bootstrap.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSession, signIn } from "next-auth/react"
import { useEffect } from 'react';
import { useStore } from '../../client/context';
import { getValues } from '../../backend/utils/common';
import { authConstant } from '../../client/context/constant';



export default function Layout({ children }) {
  const [state, dispatch] = useStore();

  useEffect(async () => {
    const authenticated = getValues(state, ["user", "authenticated"], null);

    if (!authenticated) {
      dispatch({ type: authConstant.LOGIN_REQUEST });
      const session = await getSession();

      if (session) {
        dispatch({ type: authConstant.LOGIN_SUCCESS, payload: session });
      } else {
        dispatch({ type: authConstant.LOGIN_FAILURE, payload: session });
      }
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet" />
      </Head>
      <ToastContainer />
      <Navigation />
      {children}
    </Fragment>
  )
}

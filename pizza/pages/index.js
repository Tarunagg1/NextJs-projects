import Head from 'next/head';
import React from 'react'
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza resturent in network</title>
      </Head>
      <Featured />
      <PizzaList />
    </div>
  )
}

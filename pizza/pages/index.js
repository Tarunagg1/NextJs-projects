import Head from 'next/head';
import React from 'react'
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList';
import axios from 'axios';

export const getServerSideProps = async ()=>{
  const resp = await axios.get('http://localhost:3000/api/products');
  return {
    props:{
      pizzaList:resp.data
    }
  }
}

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza resturent in network</title>
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  )
}

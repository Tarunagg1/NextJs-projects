import Image from 'next/image';
import React from 'react'
import styles from "../styles/PizzaCard.module.css";

export default function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="Pizza" width="500" height="500" />
      <h1 className={styles.title}>Pizza IHUIH IUHIUHI HUJ</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
       r adipisicing elit. Veritatis ullammos ipsum voluptate eveniet assumenda cum voluptates magnam necessitatibus quisquam facere consequuntur distinctio eos fugit perspiciatis quidem. Dolor tempora perferendis corrupti quo.
      </p>
    </div>
  )
}

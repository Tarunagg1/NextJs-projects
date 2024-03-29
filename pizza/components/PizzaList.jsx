import React from 'react'
import PizzaCard from './PizzaCard'
import styles from "../styles/PizzaList.module.css";


export default function PizzaList({ pizzaList }) {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia veniam asperiores aliquid dignissimos beatae, laborum perferendis autem dolores sequi. In quidem incidunt magni ratione deserunt magnam. Modi, possimus minima.
            </p>
            <div className={styles.wrapper}>
                {
                    pizzaList.length > 0 && pizzaList.map((ele, index) =>(
                        <PizzaCard key={index} pizza={ele} />
                    ))
                }
            </div>
        </div>
    )
}

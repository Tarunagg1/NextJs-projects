import React from 'react'
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Navbar() {

    const { quantity } = useSelector(state => state.cart);

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Link href="/">
                        <Image src="/img/telephone.png" width="22" height="22" alt="Telephone" />
                    </Link>
                </div>
                <Link href="/">
                    <div className={`${styles.texts} pointer`}>
                        <div className={styles.text}>ORDER NOW!</div>
                        <div className={styles.text}>012 345 678</div>
                    </div>
                </Link>
            </div>
            <div className={styles.ss}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/logo.png" alt="" width="60px" height="60px" />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <Link href="/cart">
                    <div className={`${styles.cart} pointer`}>
                        <Image src="/img/cart.png" alt="" width="40px" height="40px" />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </Link>
            </div>
            {/* <div className={styles.item}>right</div> */}
        </div>
    )
}

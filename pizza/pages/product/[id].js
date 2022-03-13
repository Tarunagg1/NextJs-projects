import styles from '../../styles/Product.module.css';
import Image from "next/image";
import { useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../store/cart.slice';


export const getServerSideProps = async ({ params }) => {
    const { data } = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
        props: {
            pizza: data
        }
    }
}


export default function Product({ pizza }) {
    const dispatch = useDispatch();

    const [size, setSize] = useState(0);
    const [price, setprice] = useState(pizza.prices[0]);
    const [extras, setExtras] = useState([]);
    const [qty, setqty] = useState(1);

    const changePrice = (number) => {
        setprice(price + number)
    }

    const handelSize = (sizeIndex) => {
        const diffrence = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex);
        changePrice(diffrence);
    }


    const handelAddToCart = () => {
        dispatch(addProducts({ ...pizza, extras, price, quantity: qty }))
    }


    const handelChange = (e, ele) => {
        const checked = e.target.checked;
        if (checked) {
            changePrice(ele.price);
            setExtras((prev) => [...prev, ele])
        } else {
            changePrice(-ele.price)
            setExtras(extras.filter(extra => extra._id !== ele._id))
        }
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={`${pizza?.img ? pizza?.img : '/img/pizza.png'}`} objectFit="contain" layout="fill" alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{pizza?.name}</h1>
                    <span className={styles.price}>$ {price}</span>
                    <p className={styles.desc}>{pizza?.desc}</p>
                    <h3 className={styles.choose}>Choose the size</h3>

                    <div className={styles.sizes}>
                        <div className={styles.size} onClick={() => handelSize(0)}>
                            <Image src="/img/size.png" layout="fill" alt="" />
                            <span className={styles.number}>Small</span>
                        </div>
                        <div className={styles.size} onClick={() => handelSize(1)}>
                            <Image src="/img/size.png" layout="fill" alt="" />
                            <span className={styles.number}>Medium</span>
                        </div>
                        <div className={styles.size} onClick={() => handelSize(2)}>
                            <Image src="/img/size.png" layout="fill" alt="" />
                            <span className={styles.number}>Large</span>
                        </div>
                    </div>
                    <h3 className={styles.choose}>Choose additional ingredients</h3>
                    <div className={styles.ingredients}>
                        {
                            pizza.extraOptions.length > 0 && pizza.extraOptions.map((ele, ind) => (
                                <div className={styles.option} key={ind}>
                                    <input
                                        type="checkbox"
                                        id={ele.text}
                                        name={ele.text}
                                        className={styles.checkbox}
                                        onChange={(e) => handelChange(e, ele)}
                                    />
                                    <label htmlFor="double">{ele.text}</label>
                                </div>
                            ))
                        }

                    </div>
                    <div className={styles.add}>
                        <input type="number" defaultValue={qty} onChange={(e) => setqty(e.target.value)} className={styles.quantity} />
                        <button onClick={handelAddToCart} className={styles.button}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

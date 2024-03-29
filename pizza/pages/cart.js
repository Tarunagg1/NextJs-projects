import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { reset } from '../store/cart.slice';
import axios from 'axios';

const Cart = () => {
    const { products, quantity, total } = useSelector(state => state.cart);
    const [open, setOpen] = useState(true);
    const amount = total;
    const currency = "USD";
    const style = { layout: "vertical" };
    const dispatch = useDispatch();
    const router = useRouter();

    const createOrder = async (data) => {
        try {
            const res = await axios.post("http://localhost:3000/api/orders", data);
            if (res.status === 201) {
                dispatch(reset());
                router.push(`/orders/${res.data._id}`);
            }
        } catch (err) {
            console.log(err);
        }
    };


    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);

        return (
            <>
                {showSpinner && isPending && <div className="spinner" />}
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            const shipping = details.purchase_units[0].shipping;
                            createOrder({
                                customer: shipping.name.full_name,
                                address: shipping.address.address_line_1,
                                total: total,
                                method: 1,
                            });
                        });
                    }}
                />
            </>
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {
                        products.length > 0 && products.map(product => (
                            <tr className={styles.tr}>
                                <td>
                                    <div className={styles.imgContainer}>
                                        <Image
                                            src={`${product?.img ? product?.img : '/img/pizza.png'}`} layout="fill"
                                            objectFit="cover"
                                            alt=""
                                        />
                                    </div>
                                </td>
                                <td>
                                    <span className={styles.name}>{products.title}</span>
                                </td>
                                <td>
                                    <span className={styles.extras}>
                                        {
                                            product?.extras.length > 0 && product?.extras.map((ele) => (
                                                <span>{ele.text} </span>
                                            ))
                                        }
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.price}>$ {product.price}</span>
                                </td>
                                <td>
                                    <span className={styles.quantity}>{product.quantity}</span>
                                </td>
                                <td>
                                    <span className={styles.total}>$ {product.price * product.quantity}</span>
                                </td>
                            </tr>

                        ))
                    }
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$ {total}
                    </div>
                    {
                        open ? (
                            <div className={styles.paymentMethods}>
                                <button onClick={() => createOrder({ customer: "random", address: "ih7ug7y", total, method: 1 })} className={styles.payButton}>CASH ON DELIVERY</button>
                                <PayPalScriptProvider
                                    options={{
                                        // "client-id":"ATTL8fDJKfGzXNH4VVuDy1qW4_Jm8S0sqmnUTeYtWpqxUJLnXIn90V8YIGDg-SNPaB70Hg4mko_fde4-",
                                        "client-id": "test",
                                        components: "buttons",
                                        currency: "USD",
                                        "disable-funding": "credit,card,p24",
                                    }}
                                >
                                    <ButtonWrapper currency={currency} showSpinner={false} />
                                </PayPalScriptProvider>
                            </div>
                        ) : (
                            <button className={styles.button}>CHECKOUT NOW!</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;
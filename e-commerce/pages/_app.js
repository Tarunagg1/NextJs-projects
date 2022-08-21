import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('cart');

    try {
      if (cart) {
        setCart(JSON.parse(cart));
        saveCart(JSON.parse(cart))
      }
    } catch (error) {
      console.log(error);
    }

  }, [])


  const addToCart = (itemCode, qty, name, size, varient, price) => {
    const newCart = cart;

    if (itemCode in newCart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, price, varient }
    }
    saveCart(newCart)
  }


  const removeFromCart = (itemCode,qty) => {
    const newCart = cart;
    
    if (itemCode in newCart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }

    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }

    saveCart(newCart)
  }


  const saveCart = (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
    let subT = 0;
    let keys = Object.keys(newCart);

    for (let index = 0; index < keys.length; index++) {
      subT += newCart[keys[index]].price * newCart[keys[index]].qty;
    }
    
    setSubTotal(subT);
  }

  const clearCart = (newCart) => {
    setCart({});
    localStorage.removeItem('cart');
    // saveCart({});
  }

  // const increment



  return <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp

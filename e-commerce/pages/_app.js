import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'



function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [user, setuser] = useState(null);
  const [key, setkey] = useState(0);
  const [progress, setProgress] = useState(0);

  const [subTotal, setSubTotal] = useState(0);
  const router = useRouter();

  
  useEffect(() => {
    router.events.on('routeChangeComplete',()=>{
      setProgress(100);
    })

    router.events.on('routeChangeStart',()=>{
      setProgress(40);
    })

    const cart = localStorage.getItem('cart');

    try {
      if (cart) {
        setCart(JSON.parse(cart));
        saveCart(JSON.parse(cart))
      }
    } catch (error) {
      console.log(error);
    }

    const token = localStorage.getItem('token');
    if (token) {
      setuser({ value: token });
    }
    setkey(Math.random());
  }, [router.query])


  const addToCart = (itemCode, qty, name, size, varient, price) => {
    const newCart = cart;

    if (itemCode in newCart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, price, varient }
    }
    saveCart(newCart)
  }


  const removeFromCart = (itemCode, qty) => {
    const newCart = cart;

    if (itemCode in newCart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }

    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }

    saveCart(newCart)
  }

  const buyNow = (itemCode, qty, name, size, varient, price) => {
    saveCart({});
    const newCart = { itemCode: { qty: 1, price, name, size, price, varient } };

    setCart(newCart);
    saveCart(newCart);

    // addToCart(product._id, 1, product.slug, product.size, product.color, product.price);
    router.push('/checkout');
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

  const clearCart = () => {
    setCart({});
    saveCart({});
    localStorage.removeItem('cart');
    setSubTotal(0);
  }

  // const increment

  const logout = () => {
    localStorage.removeItem('token');
    setkey(Math.random());
    setuser({ value: null });
    router.push('/');
  }



  return <>
    <LoadingBar
      color='#ff2d55'
      waitingTime={400}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    {key && <Navbar key={key} logout={logout} user={user} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />}
    <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp

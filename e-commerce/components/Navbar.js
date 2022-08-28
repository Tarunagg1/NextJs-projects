import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';

function Navbar({ cart, removeFromCart, clearCart, subTotal, addToCart, user, logout }) {
    const navRef = useRef();
    const [dropDown, setDropDown] = useState(false);

    const toggleCart = () => {
        if (navRef.current.classList.contains('translate-x-full')) {
            navRef.current.classList.remove('translate-x-full');
            navRef.current.classList.add('translate-x-0');
        } else {
            navRef.current.classList.remove('translate-x-0');
            navRef.current.classList.add('translate-x-full');
        }
    }

    const toggleDropdown = () => {
        setDropDown((prev) => !prev);
    }

    return (
        <div className="flex justify-center flex-col items-center md:flex-row md:justify-start py-2 shadow-md sticky top-0 bg-white z-10">
            <Link href={`/`} className="logo mr-auto md:mx-5">
                <Image className="cursor-pointer" src="/logo.png" height={40} width={200} alt="" />
            </Link>
            <div className="nav">
                <ul className="flex item-center space-x-4 font-bold md:text-md">
                    <Link href="/tshirts"><li className="cursor-pointer hover:text-pink-700"><a>Tshirts</a></li></Link>
                    <Link href="/hoodies"><li className="cursor-pointer hover:text-pink-700"><a>Hoodies</a></li></Link>
                    <Link href="/stickers"><li className="cursor-pointer hover:text-pink-700"><a>Stickers</a></li></Link>
                    <Link href="/mugs"><li className="cursor-pointer hover:text-pink-700"><a>Mugs</a></li></Link>
                </ul>
            </div>
            <div className="cart items-center  absolute right-0 mx-5 top-4 flex">


                <a onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
                    {
                        dropDown && (
                            <div onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} className="absolute right-8 mx-5 bg-white shadow-lg border- top-5 py-2 px-5 w-36">
                                <ul>
                                    <Link href={"/myaccount"}><li className="cursor-pointer py-2 text-sm hover:text-pink-700 font-bold">My Account</li></Link>
                                    <Link href={"/orders"}><li className="cursor-pointer py-2 text-sm hover:text-pink-700 font-bold">Orders</li></Link>
                                    <li onClick={logout} className="cursor-pointer py-2 text-sm hover:text-pink-700 font-bold">Logout</li>
                                </ul>
                            </div>
                        )
                    }
                    {user?.value && <MdAccountCircle className="text-xl md:text-3xl cursor-pointer mx-2" />}
                </a>


                {
                    !user?.value && <Link href="/login">
                        <button className="bg-pink-600 px-2 py-1 mx-2 rounded-2 text-sm text-white">Login</button>
                    </Link>
                }
                <AiOutlineShoppingCart onClick={toggleCart} className="text-xl md:text-3xl cursor-pointer" />
            </div>


            <div ref={navRef} className="w-72 h-[100vh] sideCart overflow-y-scroll absolute top-0 right-0 bg-pink-100 py-10 px-6 transform transition-transform translate-x-full br-white z-20">
                <h2 className="font-bold text-xl text-center">shopping cart</h2>
                <span onClick={toggleCart} className="absolute top-0 right-2 cursor-pointer text-2xl text-pink-500">
                    <AiFillCloseCircle /></span>
                <ul className="list-decimal font-semibold">
                    {
                        Object.keys(cart).length === 0 && <div className="my-4 text-base font-semibold">Your cart is empty.</div>
                    }
                    {
                        Object.keys(cart).map((ele, i) => (
                            <li key={i}>
                                <div className="item flex my-5">
                                    <div className="w-2/3 font-semibold">{cart[ele].name}</div>
                                    <div className="flex item-center justify-center w-1/3 font-semibold text-lg">
                                        <AiOutlineMinusCircle onClick={() => removeFromCart(ele, 1)} className="cursor-pointer text-pink-500" />
                                        <span style={{ marginTop: '-4px' }} className="mx-2">{cart[ele].qty}</span>
                                        <AiOutlinePlusCircle onClick={() => addToCart(ele, 1)} className="cursor-pointer text-pink-500" />
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="font-bold my-2">Subtotal: ₹{subTotal}</div>
                <div className="flex">
                    <Link href="/checkout"><button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className="m-1" /> Checkout</button></Link>
                    <button onClick={clearCart} className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
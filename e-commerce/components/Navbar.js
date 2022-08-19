import React, { useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';


function Navbar() {
    const navRef = useRef();

    const toggleCart = () => {
        if (navRef.current.classList.contains('translate-x-full')) {
            navRef.current.classList.remove('translate-x-full');
            navRef.current.classList.add('translate-x-0');
        } else {
            navRef.current.classList.remove('translate-x-0');
            navRef.current.classList.add('translate-x-full');
        }
    }

    return (
        <div className="flex justify-center flex-col items-center md:flex-row md:justify-start py-2 shadow-md sticky top-0 bg-white z-10">
            <Link href={`/`} className="logo mx-5">
                <Image className="cursor-pointer" src="/logo.png" height={40} width={200} alt="" />
            </Link>
            <div className="nav">
                <ul className="flex item-center space-x-4 font-bold md:text-md">
                    <Link href="/tshirts"><li className="cursor-pointer"><a>Tshirts</a></li></Link>
                    <Link href="/hoodies"><li className="cursor-pointer"><a>Hoodies</a></li></Link>
                    <Link href="/stickers"><li className="cursor-pointer"><a>Stickers</a></li></Link>
                    <Link href="/mugs"><li className="cursor-pointer"><a>Mugs</a></li></Link>
                </ul>
            </div>
            <div onClick={toggleCart} className="cart absolute right-0 mx-5 top-4">
                <AiOutlineShoppingCart className="text-xl md:text-3xl cursor-pointer" />
            </div>
            <div ref={navRef} className="w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 py-10 px-6 transform transition-transform translate-x-full br-white z-20">
                <h2 className="font-bold text-xl text-center">shopping cart</h2>
                <span onClick={toggleCart} className="absolute top-0 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
                <ul className="list-decimal font-semibold">
                    <li className="">
                        <div className="item flex my-5">
                            <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
                            <div className="flex item-center justify-center w-1/3 font-semibold text-lg">
                                <AiOutlineMinusCircle className="cursor-pointer text-pink-500" />
                                <span style={{ marginTop: '-4px' }} className="mx-2">1</span>
                                <AiOutlinePlusCircle className="cursor-pointer text-pink-500" />
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="font-bold my-2">Subtotal: ₹100</div>
                <div className="flex">
                    <Link href="/checkout"><button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className="m-1" /> Checkout</button></Link>
                    <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
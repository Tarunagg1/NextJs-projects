import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';


function Navbar() {
    return (
        <div className="flex justify-center flex-col items-center md:flex-row md:justify-start py-2 shadow-md">
            <Link href={`/`} className="logo mx-5">
                <Image className="cursor-pointer"  src="/logo.png" height={40} width={200} alt="" />
            </Link>
            <div className="nav">
                <ul className="flex item-center space-x-4 font-bold md:text-md">
                    <Link href="/tshirts"><li className="cursor-pointer"><a>Tshirts</a></li></Link>
                    <Link href="/hoodies"><li className="cursor-pointer"><a>Hoodies</a></li></Link>
                    <Link href="/stickers"><li className="cursor-pointer"><a>Stickers</a></li></Link>
                    <Link href="/mugs"><li className="cursor-pointer"><a>Mugs</a></li></Link>
                </ul>
            </div>
            <div className="cart absolute right-0 mx-5 top-4">
                <AiOutlineShoppingCart className="text-xl md:text-3xl" />
            </div>
        </div>
    )
}

export default Navbar
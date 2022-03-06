import { useRouter } from 'next/router';
import React from 'react'
import requestData from '../utils/requests';

export default function Nav() {
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex px-5 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {
                    Object.entries(requestData).map(([key, { title, url }], ind) => (
                        <h2 onClick={() => router.push(`/?genre=${key}`)} key={key} className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 ">{title}</h2>
                    ))
                }
            </div>
            <div className="absolute right-0 bg-gradient-to-l from-[#06202A] h10 w-1/12" />
        </nav>
    )
}

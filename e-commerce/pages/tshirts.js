import React from 'react';
import Link from 'next/link'

function tshirts() {
  let arr = [1, 2, 25, 5, 5, 5, 5, 5, 55, 5, 5];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            arr.map((ele, i) => (
              <Link key={i} href={`/product/${i}`}>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                  <a className="block relative  rounded overflow-hidden">
                    <img alt="ecommerce" className="m-auto md:m-0 h-{30vh} md:h-{60vh} block" src="https://m.media-amazon.com/images/I/71umrqiGonL._UX679_.jpg" />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">Wear the code</h2>
                    <p className="mt-1">₹116.00</p>
                    <p className="mt-1">S, M, L, XL, XXl, XXXl</p>
                  </div>
                </div>
              </Link>
            ))
          }



        </div>
      </div>
    </section>
  )
}

export default tshirts
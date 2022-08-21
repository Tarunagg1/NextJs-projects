import React from 'react';
import Link from 'next/link'

function tshirts({ products }) {
  // let arr = [1];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {
            products.map((ele, i) => (
              <Link parseHref={true} key={i} href={`/product/${ele.slug}`}>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                  <a className="block relative  rounded overflow-hidden">
                    <img alt={ele.slug} className="m-auto md:m-0 h-{30vh} md:h-{60vh} block" src={ele.img} />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{ele.title}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{ele.description}</h2>
                    <p className="mt-1">₹{ele.price}</p>
                    <p className="mt-1">{ele.size}</p>
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

export async function getServerSideProps(context) {
  const products = await fetch("http://localhost:3000/api/getProducts");
  const data = await products.json();
  return {
    props: { products: data.data }
  }
}

export default tshirts
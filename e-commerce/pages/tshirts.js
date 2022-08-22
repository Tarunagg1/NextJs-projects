import React from 'react';
import Link from 'next/link'

function tshirts({ products }) {
  // let arr = [1];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {
            Object.keys(products).map((ele, i) => (
              <Link parseHref={true} key={i} href={`/product/${products[ele].slug}`}>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                  <a className="block relative  rounded overflow-hidden">
                    <img alt={ele.slug} className="m-auto md:m-0 h-{30vh} md:h-{60vh} block" src={products[ele].img} />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[ele].title}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[ele].description}</h2>
                    <p className="mt-1">₹{products[ele].price}</p>
                    <div className="mt-1">
                      {products[ele].size.includes("S") && <span className="border px-1 mx-1 border-gray-300">S</span>}
                      {products[ele].size.includes("M") && <span className="border px-1 mx-1 border-gray-300">M</span>}
                      {products[ele].size.includes("L") && <span className="border px-1 mx-1 border-gray-300">L</span>}
                      {products[ele].size.includes("XL") && <span className="border px-1 mx-1 border-gray-300">XL</span>}
                      {products[ele].size.includes("XXL") && <span className="border px-1 mx-1 border-gray-300">XXl</span>}
                    </div>
                    <div className="mt-1">
                      {
                        products[ele].color.map((ele, i) => (
                          <button key={i} className={`border-2 rounded-full w-6 h-6 bg-${ele}-700 p-0 border-0 inline-flex items-center justify-center text-gray-500 mt-2`}></button>
                        ))
                      }
                    </div>
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
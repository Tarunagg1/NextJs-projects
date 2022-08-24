import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiFillLock } from 'react-icons/ai';
import Link from 'next/link';

function checkout({ cart, addToCart, removeFromCart,subTotal }) {
  return (
    <div className="container px-2 sm:m-auto">
      <div className="deliverydetails">
        <h1 className="font-bold text-center text-3xl my-8">Checkout</h1>
        <h2 className="font-semibold text-xl">1. Delivey details</h2>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter  your email address" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-full">
            <div className="mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Address</label>
              <textarea type="address" name="address" id="address" cols="30" rows="2" placeholder="Enter  your address" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
        </div>

        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="number" className="leading-7 text-sm text-gray-600">Number</label>
              <input type="number" id="number" name="phone" placeholder="Enter number" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
              <input type="text" id="city" name="city" placeholder="Enter city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>

        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
              <input type="text" id="state" name="state" placeholder="Enter state" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
              <input type="number" id="pincode" name="pincode" placeholder="Enter pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
      </div>

      <div className="reviewCart">
        <h1 className="font-bold text-center text-3xl my-8">Review Cart items & pay</h1>
        <div className=" sideCart right-0 bg-pink-100 my-4 py-6 px-6 br-white z-20">
          <ol className="list-decimal font-semibold">
            {
              Object.keys(cart).map((ele, i) => (
                <li key={i}>
                  <div className="item flex m-2">
                    <div className="font-semibold">{cart[ele].name} ( {cart[ele].size}/{cart[ele].varient} )</div>
                    <div className="flex item-center justify-center w-1/3 font-semibold text-lg">
                      <AiOutlineMinusCircle onClick={() => removeFromCart(ele, 1)} className="cursor-pointer text-pink-500" />
                      <span style={{ marginTop: '-4px' }} className="mx-2">{cart[ele].qty}</span>
                      <AiOutlinePlusCircle onClick={() => addToCart(ele, 1)} className="cursor-pointer text-pink-500" />
                    </div>
                  </div>
                </li>
              ))
            }
          </ol>
          <span className="total font-bold">Subtotal: {subTotal}</span>
        </div>
        <div className="mx-4">
          <Link href="/checkout"><button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><AiFillLock className="m-1" /> Pay ₹ 100</button></Link>
        </div>
      </div>
    </div>
  )
}

export default checkout
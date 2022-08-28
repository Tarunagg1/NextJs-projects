import React, { useEffect, useState } from 'react'
// import {MdAccountCircle} from ''
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

function signup() {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/');
    }
  }, [])

  const handelOnchange = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handelSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      const data = await resp.json();

      setUser({
        name: "",
        email: "",
        password: ""
      });

      toast.success("user created successfully")
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

      <ToastContainer />

      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/logo.png" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href="/login">
              <a href="#" className="font-medium text-pink-600 hover:text-pink-500"> Login </a>
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handelSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mt-2">
              <label htmlFor="password" className="sr-only">Name</label>
              <input id="text" value={user.name} onChange={handelOnchange} name="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 mt-3 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" onChange={handelOnchange} value={user.email} name="email" type="email" autoComplete="email" required className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" onChange={handelOnchange} value={user.password} name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 mt-3 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
              </div>

              <div className="text-sm">
                <Link href="/forgotpassword">
                <a href="#" className="font-medium text-pink-600 hover:text-pink-500"> Forgot your password? </a>

                </Link>
              </div>
            </div> */}

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-pink-500 group-hover:text-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}



export default signup;


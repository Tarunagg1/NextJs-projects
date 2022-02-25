import Image from 'next/image'
import React from 'react'
import Loader from '../../components/Loader/index';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { getSession, signIn } from "next-auth/react"
import { useRouter } from 'next/router';
import { useStore } from '../../client/context';
import { authConstant } from '../../client/context/constant';
import { getValues } from '../../backend/utils/common';


export default function Login() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [state, dispatch] = useStore();

    const router = useRouter();

    const user = getValues(state, ["user"], null);


    const loginUserHanndler = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.warning('All fields must be provided');
            return;
        }

        dispatch({ type: authConstant.LOGIN_REQUEST });

        const res = await signIn("credentials", { email, password, redirect: false });

        if (!res.error) {
            const session = await getSession();
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: session
            })

            router.replace('/');
        } else {
            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: res.error
            })

            toast.error(res.error)
        }
    }

    if (user && user.authentcating) {
        return <Loader />
    }


    if (user && user.authenticated) {
        router.replace('/');
        return null;
    }

    return (
        <div className="text-center">
            <main className="form-signin">
                <form onSubmit={loginUserHanndler}>
                    <Image className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
                        <label>Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
        </div>
    )
}

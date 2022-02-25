import Image from "next/image";
import React from "react";
import { useState } from 'react';
import { signUp } from '../../client/request';
import { toast } from 'react-toastify';
import { useStore } from '../../client/context';
import { getValues } from '../../backend/utils/common';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader/index';

export default function Register() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [state, dispatch] = useStore();
    const router = useRouter();

    const user = getValues(state, ["user"], null);



    const signUpHanndler = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            toast.warning('All fields must be provided');
            return;
        }
        const payload = { name, email, password };
        const res = await signUp(payload);
        if (res.status) {
            toast.error(res.message);
            setname(''); setemail(''); setpassword('');
            router.replace('/login');
        } else {
            toast.error(res.errorMessage)
        }
    }

    if(user && user.authentcating){
        return <Loader />
    }

    if (user && user.authenticated) {
        router.replace('/');
        return null;
    }


    return (
        <div className="text-center">
            <main className="form-signin">
                <form style={{
                    margin: '50px 0'
                }} onSubmit={signUpHanndler}>
                    <Image
                        className="mb-4"
                        src="/docs/5.1/assets/brand/bootstrap-logo.svg"
                        alt=""
                        width="72"
                        height="57"
                    />
                    <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                        <label>Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <label>Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign Up
                    </button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
        </div>
    );
}

// export const getS

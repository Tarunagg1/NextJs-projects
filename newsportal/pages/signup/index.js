import Image from "next/image";
import React from "react";
import { useState } from 'react/cjs/react.production.min';

export default function Login() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    


    return (
        <div className="text-center">
            <main className="form-signin">
                <form style={{
                    margin: '50px 0'
                }}>
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
                            onChange={(e) => setNname(e.target.value)}
                        />
                        <label>Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
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

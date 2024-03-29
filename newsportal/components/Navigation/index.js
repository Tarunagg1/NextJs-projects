import React from 'react'
import Link from 'next/link'
import { Fragment } from 'react/cjs/react.development'
import { useStore } from '../../client/context'
import { getValues } from '../../backend/utils/common';
import { signOut } from "next-auth/react"
import { authConstant } from '../../client/context/constant';


export default function Navigation() {

  const [state, dispatch] = useStore();
  const authenticated = getValues(state, ["user", "authenticated"], null);
  console.log(authenticated);

  return (
    <Fragment>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <Link href={`/profile`}>
                <a className="link-secondary" href="#">Tarun</a>
              </Link>
            </div>
            <div className="col-4 text-center">
              <Link href={`/`}>
                <a className="blog-header-logo text-dark" >NewsPortal</a>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>
              </a>
              {
                authenticated ? (
                  <>
                   <Link href={`/post/create`}>
                      <a className="btn btn-sm btn-outline-secondary user-login-btn">Createpost</a>
                    </Link>

                  <a
                    className="btn btn-sm btn-outline-secondary user-login-btn"
                    onClick={() => {
                      signOut({
                        redirect: false,
                      }).then((result) => {
                        dispatch({
                          type: authConstant.LOGIN_FAILURE
                        })
                      })
                    }}
                    >Logout</a>
                    </>
                ) : (
                  <>
                    <Link href={`/login`}>
                      <a className="btn btn-sm btn-outline-secondary user-login-btn">Sign In</a>
                    </Link>

                    <Link href={`/signup`}>
                      <a className="btn btn-sm btn-outline-secondary user-login-btn">Sign up</a>
                    </Link>
                  </>
                )
              }
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {
          `
                    .bd-placeholder-img {
                        font-size: 1.125rem;
                        text-anchor: middle;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        user-select: none;
                      }
                
                      @media (min-width: 768px) {
                        .bd-placeholder-img-lg {
                          font-size: 3.5rem;
                        }
                      }
                      .user-login-btn{
                        margin: 0 10px;
                      }
                    `
        }
      </style>
    </Fragment>

  )
}

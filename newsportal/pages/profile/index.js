import { getSession } from 'next-auth/react';
import React from 'react'
import { Fragment } from 'react/cjs/react.development'

export const getServerSideProps = async (ctx) => {
    try {

        const session = getSession({ req: ctx.req });
    } catch (error) {

    }

    const u = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    const userResp = await u.json();
    return {
        props: {
            user: userResp || null
        }
    }
}

export default function Profile({ user }) {
    return (
        <Fragment>
            <h1>{user.name}</h1> <br />
            <h1>{user.email}</h1> <br />
        </Fragment>
    )
}

import React from 'react'
import { Fragment } from 'react/cjs/react.development'

export const getServerSideProps = async ({ query }) => {
    const u = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`);
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

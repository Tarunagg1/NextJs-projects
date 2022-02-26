import React from 'react'



export const getStaticProps = async () => {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const jsonPost = await post.json();
    return {
        props: {
            post: jsonPost || null
        }
    }
}

export default function Post({ post }) {
    return (
        <div>Post b=</div>
    )
}

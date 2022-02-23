import React from 'react'
import { useRouter } from 'next/router';
import { Fragment } from 'react/cjs/react.production.min';

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          postid: '5'
        }
      }
    ],
    fallback: true // false or 'blocking'
  };
}

export const getStaticProps = async ({ params }) => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);
  const jsonPost = await post.json();
  return {
    props: {
      post: jsonPost || null
    },
    revalidate: 3
  }
}

export default function Postdetails({ post }) {

  const router = useRouter();
  // const { postid } = router.query;
  // console.log(postid);
  
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  return (
    <Fragment>
      <div>Postdetails</div>
      <div>Post by {post?.title} </div>
    </Fragment>
  )
}

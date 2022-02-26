import React from 'react'
import { getSinglepost } from '../../../client/request'

export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  console.log(query);
  const resp = await getSinglepost(query.id);
  if (resp.status) {
    return {
      props: {
        post: resp.data
      }
    }
  } else {
    return {
      props: {
        post: {},
        resp
      }
    }
  }
}

export default function postDetails({ post }) {
  return (
    <div className="container" style={{ marginTop: '20px' }}>

      <div className="row">
        <div className="col">
          <article className="blog-post">
            <h2 className="blog-post-title">{post?.title}</h2>
            <p className="blog-post-meta">{post?.updatedAt} by <a href="#">Mark</a></p>
            <img src={post?.image} alt="post" srcset="" />
            <p>{post?.description}</p>
          </article>
        </div>
      </div>
    </div>
  )
}

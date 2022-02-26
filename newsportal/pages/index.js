import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import { getAllposts } from '../client/request';

export const getStaticProps = async () => {
  const resp = await getAllposts()
  if (resp.status) {
    return {
      props: {
        posts: resp.data
      }
    }
  } else {
    return {
      props: {
        posts: [],
        resp
      }
    }
  }
}

export default function index({ posts }) {
  return (
    <div className="container" style={{ marginTop: '20px' }}>
      {
        posts.length > 0 && posts.map((ele, ind) => (
          <div className="row" key={ind}>
            <div className="col">
              <article className="blog-post">
                <h2 className="blog-post-title">{ele?.title}</h2>
                <p className="blog-post-meta">{ele?.updatedAt} by <a href="#">Mark</a></p>
                <Link href={`/post/${ele._id}/${ele.slug}`}>
                  <p>{ele?.description}</p>
                </Link>
              </article>

            </div>
          </div>
        ))
      }
    </div>

  )
}

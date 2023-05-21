import React from 'react'
import { useState } from 'react';
import randomElementArray from '../utils/randomElementArray'
import posts from '../json/posts.json'

const PostCard = () => {

  const [postRandom, SetpostRandom] = useState(randomElementArray(posts));

  const handRandomPost = () => {
    SetpostRandom(randomElementArray(posts))
  }
  return (
    <>
    <div>
      <article>
      <h1>{postRandom.id}</h1>
      <h2>{postRandom.title}</h2>
      <h3>{postRandom.body}</h3>      
      </article>
      <div className="buttonPost">
      <button onClick={ handRandomPost }>Random Post</button>
      </div>
    </div>
    </>
    
  )
}


export default PostCard
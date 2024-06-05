import React, { useState } from 'react'

export default function Post() {
// useState
const [post,setPost] = useState({});

      const loadPost = ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(response => {
            const data =  response;
            setPost(data)})
        
      }
  return (
    <div>Post
         
            <p>{post.body}</p>
        
        <button onClick={loadPost}>Get Post</button>
        <button onClick={loadPost}>Get Post</button>
        <button onClick={loadPost}>Get Post</button>
        <button onClick={loadPost}>Get Post1</button>
    </div>
    
  )
}

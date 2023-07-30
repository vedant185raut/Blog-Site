import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const Home = () => {

  const [posts,setPosts]=useState([]);

  const cat =useLocation().search
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  
  
  
  // const posts=[
  //   {
  //     id:1,
  //     title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, debitis.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat quas hic odio facere nisi quo quam ex! Explicabo, quas?",
  //     img:"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id:2,
  //     title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, debitis.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat quas hic odio facere nisi quo quam ex! Explicabo, quas?",
  //     img:"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id:3,
  //     title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, debitis.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat quas hic odio facere nisi quo quam ex! Explicabo, quas?",
  //     img:"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id:4,
  //     title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, debitis.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat quas hic odio facere nisi quo quam ex! Explicabo, quas?",
  //     img:"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  const getText = (html)=>{
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }
  




  return (
    <div className='home'>
      <div className="posts">
     {posts.map((post)=>(
      <div className="post" key={post.id}>
        <div className="img">
          <img src={`../upload/${post.img}`} alt="" />
        </div>
        <div className="content">
          <Link className='link' to={`/post/${post.id}`}>{/* to specify post in post page we specify post id  */}
          <h1>{post.title}</h1>
          </Link>
          <p>{getText(post.desc)}</p>
          <Link className="button" to={`/post/${post.id}`}>Read More</Link>
        </div>
      </div>
      ))}   
      </div>
    </div>
  )
}

export default Home
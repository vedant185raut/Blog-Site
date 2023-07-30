import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link} from "react-router-dom";

const Menu = ({cat}) => {
  
  const [posts,setPosts]=useState([]);

  
  
  

  useEffect(() => {
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      }catch(err){
        console.log(err)
      }

    };
    fetchData();
  
  }, [cat])
  
  

    // const posts=[
    //     {
    //       id:1,
    //       title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, debitis.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat quas hic odio facere nisi quo quam ex! Explicabo, quas?",
    //       img:"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //       id:2,
    //       title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, debitis.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat quas hic odio facere nisi quo quam ex! Explicabo, quas?",
    //       img:"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //       id:3,
    //       title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, debitis.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat quas hic odio facere nisi quo quam ex! Explicabo, quas?",
    //       img:"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //       id:4,
    //       title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, debitis.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat quas hic odio facere nisi quo quam ex! Explicabo, quas?",
    //       img:"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //   ];

  return (
    <div className='menu'>
        <h1>Other Posts You May Like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={`../upload/${post?.img}`} alt="" />
                <h2>{post.title}</h2>
                <Link className="button" to={`/post/${post.id}`}>Read More</Link>
        
            </div>
        ))}
    </div>

  )
}

export default Menu
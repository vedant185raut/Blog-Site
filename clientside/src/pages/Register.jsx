import React from 'react'
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs,setInputs]=useState({
    username:"",
    email:"",
    password:"",
  });

  const[err,setError]=useState(null)
  const navigate = useNavigate();

  const handleChange = e =>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit = async e =>{
    // async used to make api request 
    e.preventDefault(); // to prevent refreshing data we fill we use this function
    try{
      await axios.post("/auth/register",inputs) // axios library used to make api request 
      navigate("/login")
    }catch(err){
      setError(err.response.data)
    }
  }
  
  
  return (
    <>
      <div className='userlog'>
        <h1>Login</h1>
        <form >
          <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
          <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
          <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
          <button onClick={handleSubmit}>Login</button>
          {err && <p>{err}</p>}
          <span>Do you have an account? <Link to="/login"> Login </Link></span>
        </form>
      </div>
  </>)
}

export default Register
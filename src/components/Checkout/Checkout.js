

import React from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
  const emailRef=useRef('')
  const passwordRef=useRef('')
 const navigate=useNavigate()

  const handleSubmit=event=>{
    event.preventDefault();
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
    console.log(email,password);
  }
  const navigateLogin=()=>{
     navigate('/register')
  }
    return (
      <div className='register-form'>
      <h1 className={{textAlign:'center'}}>Please Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id=""  placeholder="enter your name" />
        <input type="email" name="email" id=""  placeholder="enter your email" required/>
        <input type="password" name="" id=""  placeholder="password" required/>
        <input type="submit" value="Register" />
      </form>
      <p>already have an account?<Link to='/login' className='text-danger pe-auto text-decoration-none'onClick={navigateLogin}>Please Login</Link></p>
    </div>
    );
};

export default Checkout;
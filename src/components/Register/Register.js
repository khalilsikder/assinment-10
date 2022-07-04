import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate=useNavigate();
  const navigateLogin=()=>{
    navigate('/Register')
  }
  return (
    <div className='register-form'>
      <h1 className={{textAlign:'center'}}>Please Register</h1>
      <form>
        <input type="text" name="name" id=""  placeholder="enter your name" />
        <input type="email" name="email" id=""  placeholder="enter your email" required/>
        <input type="password" name="" id=""  placeholder="password" required/>
        <input type="re-submit password" name="" id="" placeholder='re-submit password' required/>
        <input type="submit" value="Register" />
      </form>
      <p>already have an account?<Link to='/login' className='text-danger pe-auto text-decoration-none'onClick={navigateLogin}>Please Login</Link></p>
    </div>
  );
};

export default Register;

import React from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
  const navigate=useNavigate();
  const navigateRegister=()=>{
    navigate('/login')
  }
  return (
    <div>
      <div className='register-form'>
      <h1 className={{textAlign:'center'}}>Please login</h1>
      <form>
        <input type="text" name="name" id=""  placeholder="enter your name" />
        <input type="email" name="email" id=""  placeholder="enter your email" required/>
        <input type="password" name="" id=""  placeholder="password" required/>
        <input type="submit" value="Login" />
      </form>
      <p>Don't have account?<Link to='/register' className='text-danger pe-auto text-decoration-none'onClick={navigateRegister}>Please Register</Link></p>
    </div>
    <SocialLogin></SocialLogin>  
    </div>
  );
};

export default Login;
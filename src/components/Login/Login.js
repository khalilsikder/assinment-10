import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
            <h2 className='login-title'>Login</h2>
            <form>
            <div className='input-group'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id=''  required/>
            </div>
            <div className='input-group'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='' required/>
            </div>
            <input className='form-submit' type="submit" value="Login" />
            </form>
            <p>New to this gymweb?<Link className='form-link' to='SignUp'>create an account</Link></p>
            </div> 
            <br />
            <SocialLogin></SocialLogin>
            <br/>
        </div>
        
    );
};

export default Login;
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpassword,setConfirmPassword]=useState('');
    const[error,setError]=useState('');

    const handleEmailBlur=event=>{
        setEmail(event.target.value)
    }
    const handlePasswordlBlur=event=>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur=event=>{
        setConfirmPassword(event.target.value)
    }
    return (
        <div className='form-container'>
            <div>
            <h2 className='login-title'>Sign Up</h2>
            <form>
            <div className='input-group'>
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name='email' id='' required/>
            </div>
            <div className='input-group'>
              <label htmlFor="password">Password</label>
              <input onBlur={handlePasswordlBlur} type="password" name='password' id='' required/>
            </div>
            <div className='input-group'>
              <label htmlFor="confirm-password"> confirm Password</label>
              <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' id='' required/>
            </div>
            <input className='form-submit' type="submit" value="Signup" />
            </form>
            <p>All have an account?<Link className='form-link' to='/login'>login</Link></p>
            </div>  
        </div>
    );
};

export default Signup;
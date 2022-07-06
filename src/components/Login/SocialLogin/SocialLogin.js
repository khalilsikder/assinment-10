import React from 'react';
import './SocialLogin.css'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    let errorElement;
    if (error) {
        errorElement= 
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
      }
      if(user){
        navigate('/home')
      }
   
    return (
        <div>
            <div className='social d-flex align-items-center mx-25'>
              <div style={{height:'1px'}} className='bg-primary w-25 align-items-center'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-25 align-items-center'></div>
                {errorElement}
            </div>
            <div>
                <button onClick={()=>signInWithGoogle()} className='social-btn'>Continue with Google</button>
                <br />
                <button className='social-btn'>Continue with Facebook</button>
                <br />
                <button className='social-btn'>Continue with Github</button>
            </div>
        </div>    
    );
};

export default SocialLogin;
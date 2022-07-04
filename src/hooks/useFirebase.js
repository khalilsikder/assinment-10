import { useState } from "react"
import App from "../App"
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

const auth=getAuth(App)
const googleProvider=new GoogleAuthProvider()
const useFirebase=()=>{
    const [user,setUser]=useState({})
const signInWithGoogle=()=>{
    
}
    
    return{user,signInWithGoogle}
}

export default useFirebase;
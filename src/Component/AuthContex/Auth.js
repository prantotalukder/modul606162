import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import app from "../Firebase/firebase";
import { createUserWithEmailAndPassword, getAuth,
     onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword,
      signInWithPopup, signOut, updateProfile } from 'firebase/auth';


 export const AuthContext=createContext()
  const auth = getAuth(app)
 

const Auth = ({children}) => {
    const [user,SetUser] =useState(null)
    const [Loader,SetLoading]=useState(true)
    const Signgoole=(provider)=>{
      
        return signInWithPopup(auth,provider);
    }
    const gitHub=(provider)=>{
       
        return signInWithPopup(auth,provider)
    }
    const emailAndpassword=(email,password)=>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const Register=(email,password)=>{
        SetLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
        useEffect(()=>{
           const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser===null ||currentUser.emailVerified){
                SetUser(currentUser)
            }
            SetLoading(false)
           })
           return ()=>{
            unSubscribe()
           }
        },[])

        const ProfileUpdata=(name)=>{
        return  updateProfile(auth.currentUser,{
                displayName:name
              })
        }
        const logout=()=>{
            SetLoading(true)
            return signOut(auth)
        }
        const emailVerification=()=>{
            SetLoading(true)
            return sendEmailVerification(auth.currentUser)
        }
    const authInfo={Signgoole,gitHub,emailAndpassword,
        ProfileUpdata,Register,user,logout,Loader,emailVerification}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Auth;

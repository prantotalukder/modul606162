import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa"


import  './Register.css'
import { AuthContext } from '../AuthContex/Auth';
import toast, { } from 'react-hot-toast';
const Register = () => {
  const {Register,ProfileUpdata,emailVerification}=useContext(AuthContext)
  const [eye, SetEye] = useState(false)
  const [button, setButton] = useState(false)
  const handlar = (event) => {
    setButton(event.target.checked)
  }
  const submitHandlar = (event) => {
    event.preventDefault()
    const form=event.target;
    const name= form.names.value;
    const email=form.email.value;
    const password=form.password.value; 
    Register(email,password)
    .then(res=>{
      const user=res.user;
      console.log(user)
      nameadd(name)
      verify()
      form.reset()
    })
    .catch(error=>error.message)
  }
  const nameadd=(name)=>{

    ProfileUpdata(name)
    .then(()=>{})
    .catch(error=>error.message)
    toast.success('Register is Success')
  }
    const verify=()=>{
      emailVerification()
      .then(()=>{})
      .catch(error=>error.message)
      toast.success('Please Check your email & verify')
    }
  return (
    <div>
      <div className="hero  min-h-screen  top-10 bg-inherit  ">
        <div className="hero-content flex-col lg:flex ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold ">Please Register !</h1>

          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={submitHandlar} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='names' placeholder="UserName" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label  >
                <div className=" input input-bordered flex justify-between ">
                  <input name='password' type={eye ? 'text' : 'password'} placeholder="password" className="" required />
                  <button onClick={() => SetEye(!eye)}>{eye ? <FaEye /> : <FaEyeSlash />}</button>
                </div>
                <div className="treams flex mt-2 ">
                  <input onClick={handlar} type="checkbox"  className=" mt-1.5 w-3 h-3 checkbox checkbox-primary  " />
                  <span className='ml-2' >All trems & Conditions</span>
                </div>
                <label className=" text-xs text-left mt-1 mb-0   ">
                  <p className='mt-2' >Have an Account,<Link to={'/Login'} className='text-blue-700 underline ' >Login</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={!button}>Register</button>
              </div>
                  
              
            </form>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Register;
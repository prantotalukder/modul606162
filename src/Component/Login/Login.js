import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../AuthContex/Auth';
import toast from 'react-hot-toast';



const Login = () => {
  const [error,setError]=useState('')
  const navigate=useNavigate()
  const location = useLocation()
  const froms= location.state?.form?.pathname || '/';
  const {emailAndpassword}=useContext(AuthContext)
        const [eye,SetEye]=useState(false)
        const SubmitHandlar=(event)=>{
          event.preventDefault()
          const form= event.target;
          const email=form.email.value;
          const password=form.password.value;
          emailAndpassword(email,password)
          .then(res=>{
            const users=res.user;
            console.log(users)
            form.reset()
            toast.success('login is Success')
            if(users.emailVerified){
              navigate(froms,{replace:'true'})
            }
            else{
              toast.error('Your email is not verify Please verify your email')
            }
          })
          .catch(error=>setError(error.message))

        }
    return (
        <div>
            <div className="hero  min-h-screen  top-10 bg-inherit  ">
  <div className="hero-content flex-col lg:flex ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold ">Please Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={SubmitHandlar} >
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
          <input name='password' type={eye?'text':'password'} placeholder="password" className="" required />
           <button onClick={()=>SetEye(!eye)}>{eye?<FaEye />:<FaEyeSlash />}</button>
          </div>
          {error}
          <label className=" text-xs text-left mt-1 mb-0   ">
            <Link to={''} className="label-text-alt link link-hover text-blue-700 underline">Forgot password?</Link>

            <p className='mt-2' >NoAccount,<Link to={'/Register'} className='text-blue-700 underline ' >Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
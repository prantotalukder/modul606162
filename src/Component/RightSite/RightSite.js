import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FcPrivacy } from "react-icons/fc";
import { FaBars } from "react-icons/fa6";
import './RightSite.css'
import { AuthContext } from '../AuthContex/Auth';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';

const RightSite = () => {
  const {Signgoole,gitHub}=useContext(AuthContext)
  const provider= new GoogleAuthProvider()
  const gitprovider = new GithubAuthProvider()

  const handlar=()=>{
    Signgoole(provider)
    .then(res=>{
        const user=res.user;
        console(user) 
    })
    .catch(error=>error.message)
  }
  const githandlar=()=>{
    gitHub(gitprovider)
    .then(res=>{
      const user=res.user;
      console(user) 
  })
  .catch(error=>error.message)
  }
  return (
    <div className='border w-full' >
      <button className="btn btn-outline w-5/6 mt-4 mb-4 btn-info  " onClick={handlar} ><FcGoogle />Login vai Google</button>
      <br />
      <button className="btn btn-outline w-5/6 " onClick={githandlar} ><FaGithub />Login vai Github</button>
      <div className="">
        <h2 className='text-sm' >Find Us On</h2>
        <Link  className='text-l w-5/6 border m-auto mt-2 p-1 rounded flex   ' ><FaFacebook className='text-sky-500 mt-1 ml-3 ' /><span className='ml-2' >FaceBook</span></Link>
        <Link  className='text-l w-5/6 border m-auto mt-2 p-1 rounded   flex  ' ><FaYoutube className='text-red-600 mt-1 ml-3 ' /><span className='ml-2' >YouTube</span></Link>
        <Link  className='text-l w-5/6 border m-auto mt-2 p-1 rounded  flex  ' ><FaTwitter className='text-sky-500 mt-1 ml-3 ' /><span className='ml-2' >Twitter</span></Link>
        <Link  className='text-l w-5/6 border m-auto mt-2 p-1 rounded  flex  ' ><FaWhatsapp className=' text-green-400 mt-1 ml-3 ' /><span className='ml-2' >WhatsApp</span></Link>
        <Link  className='text-l w-5/6 border m-auto mt-2 p-1 rounded  flex  ' ><FaDiscord className='text-blue-600 mt-1 ml-3 ' /><span className='ml-2' >Discord</span></Link>
        <Link  className='text-l w-5/6 border m-auto mt-2 p-1 rounded  flex  ' ><FcPrivacy className='text-sky-500 mt-1 ml-3 ' /><span className='ml-2' >Privacy_Policy</span></Link>
        <Link  className='text-l w-5/6 border m-auto mt-2 p-1 rounded   flex  ' ><FaBars className='text-stone-950 mt-1 ml-3' /><span className='ml-2' >
          Terms & Condition</span></Link>



      </div>



      <div className="">
        <p>Editorials</p>
        <div className="carousel w-5/6 m-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/1vcgPzg/unsplash-Eh-Tc-C9s-YXsw-12.png"
              className="w-full h-28" alt='' />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="text-white">❮</a>
              <a href="#slide2" className="text-white">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/j86wjDW/unsplash-Eh-Tc-C9s-YXsw-20.png"
              className="w-full h-28" alt='' />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="text-white">❮</a>
              <a href="#slide3" className="text-white">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/k8XBcMX/unsplash-Eh-Tc-C9s-YXsw-15.png"
              className="w-full h-28" alt='' />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="text-white">❮</a>
              <a href="#slide4" className="text-white">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png"
              className="w-full h-28" alt='' />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="text-white">❮</a>
              <a href="#slide1" className="text-white">❯</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RightSite;
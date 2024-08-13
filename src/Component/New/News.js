import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { FaShareAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const News = () => {
    const data= useLoaderData()
    const {category_id, author, image_url, details, title } = data
    return (
        <div>
            <div className="mb-5 ">
                <div className="nav bg-stone-300 p-1 flex justify-between ">
                    <div className="navtex flex relative  ">
                        <img className='w-10 h-10 rounded-full mt-1 ml-2 ' src={author.img} alt="" />
                        <div className=" text-left ml-3">
                        <p className='' >{author.name} </p>
                        <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div className="icon flex mr-4 mt-4 ">
                    <FaShareAlt className='mr-2' />
                    <FaBookmark />
                    </div>
                </div>
                <div className="Body">
                    <p className='text-left ml-2' >{title}</p>
                    <img src={image_url} alt="" />
                    <p className='text-left ml-2'>{details}</p>
                    <Link to={`/catagory/${category_id}`} ><button className=' btn btn-outline  ' ><FaArrowLeft />Back</button></Link>
                </div>
                {/* <div className="footer flex justify-between bg-stone-300 p-2 ">
                    <p className='flex ml-4' >
                    <FaStar className='mt-0.5 text-amber-400' />
                    <p>{rating.number}</p>
                    </p>
                    <p className='flex mr-4'>
                    <FaEye className='mt-1' />
                    <p>{total_view}</p>
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default News;
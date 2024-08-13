import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const NewsSummery = ({n}) => {
    const {_id, author, image_url, rating, total_view, details, title }=n
    return (
        <div>
            <div className="mb-5 bg-stone-200 rounded" >
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
                    { details.length >= 200
                        ? <h4 className='text-left ml-2' >{details.slice(0,200)+'...'}<Link to={`/News/${_id}`} ><span className='text-blue-700' >Read more</span></Link> </h4>
                        :
                        <p className='text-left ml-2'>{details}</p>
                    }
                </div>
                <div className="footer flex justify-between bg-stone-300 p-2 ">
                    <p className='flex ml-4' >
                    <FaStar className='mt-0.5 text-amber-400' />
                    <p>{rating.number}</p>
                    </p>
                    <p className='flex mr-4'>
                    <FaEye className='mt-1' />
                    <p>{total_view}</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsSummery;
import React, { useEffect, useState } from 'react';
import {  NavLink } from 'react-router-dom';
import './LeftSite.css'

const LeftSite = () => {
        const[catagory,SetCatagory]=useState([]);
        useEffect(()=>{
            fetch('http://localhost:5000/catagory')
            .then(res=>res.json())
            .then(data=>SetCatagory(data))
        },[])
       
    return (
        <div>
            <p className='text-lg font-bold mb-4' >Left site Catagory Length is : {catagory.length} </p>
            {
                catagory.map(datas=><NavLink className={({isActive})=>isActive?'active':'default'} key={datas.id} to={`catagory/${datas.id}`} ><button className=' border border-stone-500 w-7/12 mb-3 h-8 rounded font-semibold hover:bg-gray-600 hover:text-white tops ' >{datas.name}</button><br /></NavLink>)
            }
        </div>
    );
};

export default LeftSite;
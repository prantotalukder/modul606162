import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummery from '../NewsSummery/NewsSummery';

const Catagorys = () => {
    const data= useLoaderData();
    return (
        <div>
   <h4 className='text-left font-bold text-lg ' >This is Category has news: {data.length}</h4>             
            {
                data.map(n=><NewsSummery key={n._id} n={n} ></NewsSummery>)
            }
        </div>
    );
};

export default Catagorys;
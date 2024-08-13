import React from 'react';
import LeftSite from '../LeftSite/LeftSite';
import RightSite from '../RightSite/RightSite';
import { Outlet} from 'react-router-dom';
import Nav from '../Nav/Nav';


const Main = () => {

    return (
        <div className='grid grid-rows'>
            <div className=" sticky top-0 z-10  ">
                <Nav></Nav>
            </div>

            <div className="grid grid-cols-4">
            <div className="col-span-1  ">
                <div className="fixed left-7  ">
                <LeftSite></LeftSite>
                </div>
            </div>
            <div className="col-span-2 ">
                <Outlet>
                </Outlet>
            </div>
            <div className="col-span-1 ">
                <div className="fixed">
                <RightSite></RightSite>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Main;
import React, { useContext } from 'react';
import { Link, } from 'react-router-dom';
import { AuthContext } from '../AuthContex/Auth';
import './Nav.css'

const Nav = () => {

    const { user,logout} = useContext(AuthContext)

    const handlar=()=>{
        logout()
        .then(()=>{})
        .catch(error=>error.message)
    }
    return (
        <div className="navbar bg-primary text-primary-content flex justify-between ">
            <Link to={'/'} ><button className="btn btn-ghost text-xl">News</button></Link>
            <div className="mr-10">
                {user?
                    <div className="flex ">
                        <p className='' >{user.displayName}</p>
                        <button className='ml-5  buton  ' type="submit" onClick={handlar} >LogOut</button>

                    </div>
                    : <div className="">
                        <Link className="mr-5 buton" to={'/login'}>Login</Link>
                        <Link className="buton" to={'/Register'}>Register</Link>
                    </div>
                }
            </div>

        </div>

    );
};

export default Nav;
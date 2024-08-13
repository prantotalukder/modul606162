import React, { useContext } from 'react';
import { AuthContext } from '../AuthContex/Auth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,Loader}=useContext(AuthContext)
    const location= useLocation()
    if(Loader){
        return <span className="loading loading-spinner text-info"></span>;
    }
        if(!user){
            return <Navigate to={'/login'} state={{form:location}} replace ></Navigate>
        }
    return children;
};

export default PrivateRoute;
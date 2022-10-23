import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoutes = () => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
     if(user && user.uid){
        return Children;
     }
     return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;
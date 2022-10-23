import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoutes = ({Children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

     if(loading){
        return <div>Loading...</div>
     }

     if(user && user.uid){
        return Children;
     }
     return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;
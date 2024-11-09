import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // Loading is being set 
    if (loading) {
        return <><button className="text-4xl text-blue-500">loading</button></>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/logIn' state={{ from: location }} replace />
};

export default PrivateRoute;
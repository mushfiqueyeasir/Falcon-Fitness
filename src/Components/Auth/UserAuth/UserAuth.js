import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const UserAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return;
    }

    if (user)
        return <Navigate to="/home" state={{ from: location }} replace />
    else
        return children;
};

export default UserAuth;
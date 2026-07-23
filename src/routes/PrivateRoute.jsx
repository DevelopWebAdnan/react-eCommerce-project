import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);

    const {user, loading} = useContext(AuthContext);

    if(user){
        return children;
    }

    if(loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;
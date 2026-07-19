import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(user){
        return children;
    }

    if(loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;
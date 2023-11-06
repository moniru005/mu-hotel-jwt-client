import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    const location = useLocation();

    if(loading){
        return (
                <div className="flex items-center justify-center my-10">
                    <progress className="progress progress-success w-56"></progress>
                </div>
            );
        
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>
    
};

export default PrivateRoute;
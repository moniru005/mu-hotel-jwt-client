import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const useAuth = () => {
    const authUtils = useContext(AuthContext);
    return authUtils;
   
};

export default useAuth;
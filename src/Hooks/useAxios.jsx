import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "https://hotel-jwt-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  const { userSignOut } = useAuth();

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if(error.response.status === 401 || 403) {
        userSignOut();
      }
    }
  );
  return instance;
};

export default useAxios;

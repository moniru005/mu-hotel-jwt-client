import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:5000",
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

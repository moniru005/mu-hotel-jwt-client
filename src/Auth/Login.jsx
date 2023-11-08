import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import SocialLogin from "./SocialLogin";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
// import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { signIn, userSignOut } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const axios = useAxios();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    try {
      const user = await signIn(email, password)
      const res = await axios.post('/jwt', {email: user.user.email});
      console.log(res);
      if(res.data.success){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Successfully Logged in",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location?.state ? location.state : "/");
      }
      else{
        userSignOut();
      }
      
    } catch (err) {
      Swal.fire({
        title: "Wrong Email or Password",
        text: err.message,
        icon: "error"
      });
    }
  };

  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <div className="shadow-lg mb-6 bg-slate-500">
        <Navbar></Navbar>
      </div>
      <div className="hero  font-worSans lg:w-3/5 md:w-3/5 mx-auto">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSignIn}
              className="card-body dark:bg-slate-800 dark:text-white dark:border-white dark:border-2 dark:rounded-t-lg"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Password</span>
                </label>

                <div className="relative form-control">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                    required
                  />
                  <span
                    className="absolute top-4 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-transparent text-black border-yellow-600 hover:text-slate-800 hover:border-slate-900 hover:bg-yellow-500"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="pb-8">
              <SocialLogin></SocialLogin>
            </div>
          </div>
          <p>
            If you new here! Please
            <Link to="/register">
              <button className="pl-1 hover:text-orange-600"> Register</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
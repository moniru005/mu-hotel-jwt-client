import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Navbar from "../Components/Header/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { signUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);
    const createUser = {name, email, password};
    console.log(createUser);

    if (!/.{6,16}$/.test(password)) {
      Swal.fire({
        title: "Warning!",
        text: "The Password should be 6 characters",
        icon: "warning",
      });
    } else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      Swal.fire({
        title: "Warning!",
        text: "The Password must contain at least one Uppercase and Lowercase letter",
        icon: "warning",
      });
    } else if (!/(?=.*\W)(?!.* )/.test(password)) {
      Swal.fire({
        title: "Warning!",
        text: "The password must contain one special character",
        icon: "warning",
      });
    }
    else{
      try {
        await signUp(email, password);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Successfully Registered",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    }
    
  };

  return (
    <div className="dark:bg-slate-900">
      <div className="shadow-lg mb-6 bg-slate-500">
        <Navbar></Navbar>
      </div>
      <div className="hero  font-worSans lg:w-3/5 md:w-3/5 mx-auto ">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold dark:text-white">
              Please Register now!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSignUp}
              className="card-body dark:bg-slate-900 dark:border-white dark:border-2 dark:rounded-t-lg"
            >
              <div className="form-control ">
                <label className="label">
                  <span className="label-text dark:text-white">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none"
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none"
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
                    className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none"
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
                  className="btn bg-slate-800 text-white hover:text-slate-800 hover:border-slate-900"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <div className="pb-8">
              <SocialLogin></SocialLogin>
            </div>
          </div>
          <p>
            Already Member! Please
            <Link to="/login">
              <button className="pl-1 hover:text-orange-600">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

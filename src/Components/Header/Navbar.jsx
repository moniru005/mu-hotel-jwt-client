import { NavLink } from "react-router-dom";
import '../Header/Navbar.css'

const Navbar = () => {
    const navbar = (
    <>
      <div className="nav flex lg:flex-row md:flex-col flex-col gap-2 text-md font-semibold  text-white ">
        <li>
            <NavLink to="/" style={({ isActive }) => ({background: isActive ? "#8c6c14" : "",})}>
            Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/rooms" style={({ isActive }) => ({background: isActive ? "#8c6c14" : "",})}>Rooms
            </NavLink>
        </li>
        <li>
            <NavLink to="/cart" style={({ isActive }) => ({background: isActive ? "#8c6c14" : "",})}>My Bookings
            </NavLink>
        </li>
        <li>
            <NavLink to="/about" style={({ isActive }) => ({background: isActive ? "#8c6c14" : "",})}>About
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact" style={({ isActive }) => ({background: isActive ? "#8c6c14" : "",})}>Contact
            </NavLink>
        </li>
      </div>
    </>
);
  return (
    <div className="mx-auto font-worSans dark:bg-slate-800 dark:text-white z-10 relative">
      <div className="lg:max-w-6xl navbar mx-auto dark:bg-slate-800 dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navbar}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-1 dark:bg-white dark:text-black">
            <img className="w-20" src="https://i.ibb.co/d0NNRmp/logo-1.png" alt=""/>
            <p className="text-2xl font-medium font-worSans text-slate-800">
              <h2 className="font-worSans text-[#FAFAFA]">Murn Inn</h2>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1  ">{navbar}</ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <div className="flex items-center gap-2">
            <button className="btn bg-[#f6db18]">Login</button>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

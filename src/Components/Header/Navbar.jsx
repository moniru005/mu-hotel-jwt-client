import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navbar = (
    <>
      <div className="flex lg:flex-row md:flex-col flex-col gap-2 text-md font-semibold  ">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/rooms">Rooms</NavLink></li>
        <li><NavLink to="/cart">My Bookings</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
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
                stroke="currentColor"
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
            <img className="w-20" src="https://i.ibb.co/NL5W5zT/logo.png" alt=""/>
            <p className="text-2xl font-extrabold font-worSans text-slate-800">
              <h2 className="font-worSans text-[#1e4051]">Murn Inn</h2>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">{navbar}</ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <div className="flex items-center gap-2">
            <button className="btn">Login</button>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

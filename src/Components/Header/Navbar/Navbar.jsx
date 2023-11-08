import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../../Hooks/useAuth";
import { FaBars } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userSignOut } = useAuth();

  const handleLogOut = async () => {
    await Swal.fire({
      title: "Are you sure?",
      text: "You want to logout at this moment!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I Want!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          userSignOut();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Successfully Logged out",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (err) {
          console.log(err);
        }
      }
    });
  };
  const navbar = (
    <>
      <div className="nav flex lg:flex-row md:flex-col flex-col gap-2 text-md font-semibold  text-white ">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              background: isActive ? "#8c6c14" : "",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rooms"
            style={({ isActive }) => ({
              background: isActive ? "#8c6c14" : "",
            })}
          >
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            style={({ isActive }) => ({
              background: isActive ? "#8c6c14" : "",
            })}
          >
            My Bookings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              background: isActive ? "#8c6c14" : "",
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              background: isActive ? "#8c6c14" : "",
            })}
          >
            Contact
          </NavLink>
        </li>
        <li></li>
      </div>
    </>
  );
  return (
    <div className="mx-auto font-worSans dark:bg-slate-800 dark:text-white">
      <div className="lg:max-w-6xl navbar mx-auto dark:bg-slate-800 dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars className="text-white text-2xl"></FaBars>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52 "
            >
              {navbar}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-1 dark:bg-white dark:text-black">
            <img
              className="w-20"
              src="https://i.ibb.co/d0NNRmp/logo-1.png"
              alt=""
            />
            <p className="text-2xl font-medium font-worSans text-slate-800">
              <h2 className="font-worSans text-[#FAFAFA]">Murn Inn</h2>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1  ">{navbar}</ul>
        </div>

        <div className="navbar-end flex items-center gap-2 font-worSans">
          <div className="flex items-center gap-2">
            {/* <p className="lg:flex text-white hidden font-medium">{user?.displayName}</p> */}

            {user?.email ? (
              <div className="flex justify-center items-center">
                <label
                  tabIndex={0}
                  className="lg:flex hidden   btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <button
                  onClick={handleLogOut}
                  className=" text-white font-medium hover:bg-yellow-700 p-2 rounded-lg font-workSans"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className=" text-white font-medium hover:bg-yellow-700 p-2 rounded-lg font-workSans">
                  Login
                </button>
              </Link>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <button className="btn bg-yellow-600 hover:bg-yellow-700 text-white">
                Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
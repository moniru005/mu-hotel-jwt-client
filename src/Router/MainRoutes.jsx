import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import RoomsPage from "../Pages/RoomsPage";
import RoomDetails from "../Components/Rooms/RoomDetails";
import BookingPage from "../Pages/BookingPage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/rooms',
                element: <PrivateRoute><RoomsPage></RoomsPage></PrivateRoute>
            },
            {
                path: '/roomDetails',
                element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
            },
            {
                path: '/bookings',
                element: <PrivateRoute><BookingPage></BookingPage></PrivateRoute>
            },
            {
                path: '/about',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            },

        ]
    }
])

export default MainRoutes;
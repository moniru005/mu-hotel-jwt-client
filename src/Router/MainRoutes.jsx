import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import RoomsPage from "../Pages/RoomsPage";
import RoomDetails from "../Components/Rooms/RoomDetails";

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
                element: <RoomsPage></RoomsPage>
            },
            {
                path: '/roomDetails',
                element: <RoomDetails></RoomDetails>
            }
        ]
    }
])

export default MainRoutes;
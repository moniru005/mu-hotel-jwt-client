import Navbar from "../Components/Header/Navbar/Navbar";
import Rooms from "../Components/Rooms/Rooms";

const RoomsPage = () => {
    return (
        <>
        <div className="shadow-lg bg-slate-500">
            <Navbar></Navbar>
        </div>
        <div className="mb-20">
            <Rooms></Rooms>
        </div>
        </>
    );
};

export default RoomsPage;
import Bookings from "../Components/Bookings/Bookings";
import Navbar from "../Components/Header/Navbar/Navbar";

const BookingPage = () => {
  return (
    <div>
      <div className="shadow-lg bg-slate-500">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center mt-20">
        <Bookings></Bookings>
      </div>
      
    </div>
  );
};

export default BookingPage;

import { useEffect, useState } from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";
import MyBookingRow from "./MyBookingRow";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";

const MyBooking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const axios = useAxios();
  

  const url = `/user/bookings?email=${user?.email}`;

  useEffect(() => {
    axios.get(url).then((res) => setBookings(res.data));
  }, [axios, url]);

  const handleDelete = (id) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You want to cancel your booking!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I Want!",
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://hotel-jwt-server.vercel.app/user/cancel-booking/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your booking has been canceled.",
                        showConfirmButton: false,
                        timer: 1500,
                      });

                    const remaining = bookings.filter((booking) => booking._id !== id);
                    setBookings(remaining);
                  }
                });
        }
      });

  };

  const handleConfirm = (id) => {
    fetch(`https://hotel-jwt-server.vercel.app/user/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });


  };

  return (
    <>
      <div className="shadow-lg bg-slate-500">
        <Navbar></Navbar>
      </div>

      <h2 className="text-2xl font-medium text-center mt-6 mb-12 uppercase text-yellow-700">My Bookings: </h2>

      <div className="overflow-x-auto">
        <table className="table mb-12">
          {/* head */}
          <thead >
            <tr className="text-sm text-center">
              <th></th>
              <th>Booking Person</th>
              <th>Room Type</th>
              <th>Check In Date</th>
              <th>Check Out Person</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-center font-medium">
            {/* row 1 */}

            {bookings.map((booking) => (
              <MyBookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
                
              ></MyBookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyBooking;

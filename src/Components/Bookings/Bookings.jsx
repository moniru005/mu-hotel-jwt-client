import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import useRooms from "../../Hooks/useRooms";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Bookings = () => {
    const [roomData, setRoomData] = useState();
    const navigate = useNavigate();

    const bookings = useRooms();
    const {user} = useAuth();
    const axios = useAxios();

    const {id} = useParams()
    useEffect(() =>{
      const findItem = bookings.find(item=> item._id === id);
       setRoomData(findItem);

    }, [bookings, id])

    const handleBook = e =>{
      e.preventDefault();
      const form = e.target;
      const startDate = form.startDate.value;
      const endDate = form.endDate.value;
      const price = form.price.value;
      const guest = form.guest.value;
      const roomType = form.roomType.value;
      const name = form.name.value;
      const email = user?.email
      const phone = form.phone.value;
      const address = form.address.value;

      const booking = {
        startDate, endDate, guest, price, roomType, name, email, phone, address
      }
      console.log(booking);

      axios.post('/user/create-bookings', booking)
      .then(res =>{
        console.log(res.data)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thanks for Booked your Room!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/my-booking')
      })
    

    }





  return (
    <div className=" border-s-red-200 lg:w-full h-full mb-10">
      <div className="lg:w-3/6  font-worSans  mx-auto border-2 ">
        <div className="flex-col ">
          <div className="text-center text-white lg:text-center p-4 bg-yellow-600">
            <h1 className="text-2xl font-bold ">Reserve your Room</h1>
          </div>
          <div className="shadow-2xl bg-base-100 ">

            <form onSubmit={handleBook} className="card-body  dark:bg-slate-800 dark:text-white dark:border-white dark:border-2 dark:rounded-t-lg" >

              <div className="flex gap-4">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text dark:text-white">Check In</span>
                  </label>
                  <input type="date" name="startDate"  placeholder="Date"
                    className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                    required />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text dark:text-white">Check Out</span>
                  </label>
                  <input type="date" name="endDate" placeholder="Date"
                    className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                     />
                </div>
              </div>

                <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="form-control lg:w-6/12">
                        <label className="label">
                        <span className="label-text dark:text-white">Select Room</span>
                        </label>
                        <select name="roomType"
                        className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                        required>
                          <option  disabled selected>
                            {roomData?.roomType}
                          </option>
                          {
                            bookings.map(item=> 
                                <option key={item} value={item.roomType}>{item.roomType}</option>)
                          }
                        </select>
                    </div>
                    <div className=" flex flex-col lg:first-letter:flex-row form-control lg:w-2/12">
                        <label className="label">
                        <span className="label-text dark:text-white">Price/Night</span>
                        </label>
                        <input type="text" defaultValue={roomData?.pricePerNight} name="price" placeholder="Price"
                        className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black text-center"
                        required /> 
                    </div>      
                    <div className="form-control lg:w-4/12">
                        <label className="label">
                        <span className="label-text dark:text-white">Guest</span>
                        </label>
                        <select name="guest"  
                        className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                        required>
                            <option disabled selected>
                               Guset Number
                            </option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                
                
               <div>
                    <div className="details">
                    <h2 className="text-xl mt-6 font-medium">
                            Enter Your Details
                        </h2>
                        
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text dark:text-white">Full Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name"
                        className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                        required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="label-text dark:text-white">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" placeholder="Email"
                        className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                        required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="label-text dark:text-white">Phone</span>
                        </label>
                        <input type="text" name="phone" placeholder="Phone Number"
                        className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                        required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="label-text dark:text-white">Address</span>
                        </label>
                        <input type="text" name="address" placeholder="Address"
                        className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                        required />
                    </div>
                    </div>

               </div>

            
              <div className="form-control mt-6">
                <input
                  className="btn bg-transparent text-black border-yellow-600 hover:text-slate-800 hover:border-slate-900 hover:bg-yellow-500"
                  type="submit"
                  value="Book Now"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

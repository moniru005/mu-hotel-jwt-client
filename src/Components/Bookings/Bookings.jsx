import useRooms from "../../Hooks/useRooms";

const Bookings = () => {

    const bookings = useRooms();





  return (
    <div className=" border-s-red-200 w-full h-full mb-10">
      <div className="w-3/6  font-worSans  mx-auto border-2 ">
        <div className="flex-col ">
          <div className="text-center lg:text-center p-4 bg-yellow-600">
            <h1 className="text-2xl font-bold ">Hotel Reservation</h1>
          </div>
          <div className="shadow-2xl bg-base-100 ">

            <form className="card-body  dark:bg-slate-800 dark:text-white dark:border-white dark:border-2 dark:rounded-t-lg" >

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Choose Date</span>
                </label>
                <input type="date" name="date" placeholder="Date"
                  className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                  required />
              </div>

                <div className="flex justify-between gap-6">
                    <div className="form-control w-5/12">
                        <label className="label">
                        <span className="label-text dark:text-white">Guest</span>
                        </label>
                        <select name="guest"  
                        className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                        required>
                            <option disabled selected>
                                How Many Person
                            </option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-control w-7/12">
                        <label className="label">
                        <span className="label-text dark:text-white">Select Room</span>
                        </label>
                        <select  
                        className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                        required>
                           {
                            bookings.map(item=> 
                                <option key={item} value={item.roomType}>{item.roomType}</option>)
                           }
                        </select>
                    </div>
                </div>
                
                
                <h2 className="text-xl mt-6 font-medium">
                    Enter Your Details
                </h2>
                
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Full Name</span>
                </label>
                <input type="text" name="name" placeholder="Name"
                  className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                  required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email"
                  className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                  required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input type="text" name="phone" placeholder="Phone Number"
                  className="input input-bordered focus:outline-slate-600 focus:outline-1 focus:border-none dark:text-black"
                  required />
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

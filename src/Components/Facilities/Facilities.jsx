import Navbar from "../Header/Navbar/Navbar";
import { MdOutlineRestaurant } from "react-icons/md";

const Facilities = () => {
  return (
    <div className="lg:relative ">
      <div className=" lg:absolute lg:w-full lg:z-50 bg-slate-400 lg:bg-transparent">
        <Navbar></Navbar>
      </div>
      <div className="lg:flex flex-col justify-center">
        <div className="hidden lg:flex">
          <img className="" src="https://i.ibb.co/wrmwXL3/2.jpg" alt="" />
          <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)100%)] z-0 "></div>
        </div>

        {/* Facilities */}
        <div className="my-14  lg:absolute lg:top-[8%] lg:text-white ">
          <div className="text-center  space-y-2  font-worSans  ">
            <h2 className="font-worSans  text-2xl text-yellow-600">
              Our Luxurious Hotel
            </h2>
            <h1
              className="uppercase text-5xl font-bold"
              style={{ letterSpacing: "6px" }}
            >
              Facilities
            </h1>
          </div>

          <div className="facilities-section  my-16 px-16 font-worSans">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-4 justify-items-center">
            <div className="restaurant flex gap-4 w-96  p-3 hover:shadow-lg hover:shadow-yellow-500 cursor-pointer rounded border border-yellow-400">
              <div className="">
                <MdOutlineRestaurant className="text-white bg-yellow-500 p-2 w-[80px] h-[80px]"></MdOutlineRestaurant>
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-2">Restaurant</h2>
                <p className="text-left">
                  Our hotel offers luxurious, exclusive dining with a selection
                  of high-end restaurants and private rooms for an unforgettable
                  experience.
                </p>
              </div>
            </div>

            <div className="swimming flex gap-4 w-96  p-3 hover:shadow-lg hover:shadow-yellow-500 cursor-pointer rounded border border-yellow-400">
              <div className="">
                <MdOutlineRestaurant className="text-white bg-yellow-500 p-2 w-[80px] h-[80px]"></MdOutlineRestaurant>
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-2">Swimming Pool</h2>
                <p className="text-left">
                Our hotel offers a luxurious outdoor pool with hot tub, sun loungers and cabanas for guests to enjoy.
                </p>
              </div>
            </div>

            <div className="fitness flex gap-4 w-96  p-3 hover:shadow-lg hover:shadow-yellow-500 cursor-pointer rounded border border-yellow-400">
              <div className="">
                <MdOutlineRestaurant className="text-white bg-yellow-500 p-2 w-[80px] h-[80px]"></MdOutlineRestaurant>
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-2">Fitness Area</h2>
                <p className="text-left">
                Our Fitness Area offers a range of modern equipment for guests to stay active, including treadmills, weights and yoga mats.
                </p>
              </div>
            </div>

            <div className="minibar flex gap-4 w-96  p-3 hover:shadow-lg hover:shadow-yellow-500 cursor-pointer rounded border border-yellow-400">
              <div className="">
                <MdOutlineRestaurant className="text-white bg-yellow-500 p-2 w-[80px] h-[80px]"></MdOutlineRestaurant>
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-2">Mini Bar</h2>
                <p className="text-left">
                We offer a variety of drinks and snacks in our mini bar, for your convenience and enjoyment.
                </p>
              </div>
            </div>

            <div className="meeting flex gap-4 w-96  p-3 hover:shadow-lg hover:shadow-yellow-500 cursor-pointer rounded border border-yellow-400">
              <div className="">
                <MdOutlineRestaurant className="text-white bg-yellow-500 p-2 w-[80px] h-[80px]"></MdOutlineRestaurant>
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-2">Meeting Room</h2>
                <p className="text-left">
                Our hotel provides spacious, luxurious meeting rooms with modern amenities and services for all business needs.
                </p>
              </div>
            </div>

            <div className="laundry flex gap-4 w-96  p-3 hover:shadow-lg hover:shadow-yellow-500 cursor-pointer rounded border border-yellow-400">
              <div className="">
                <MdOutlineRestaurant className="text-white bg-yellow-500 p-2 w-[80px] h-[80px]"></MdOutlineRestaurant>
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-2">Laundry Service</h2>
                <p className="text-left">
                We provide guests with convenient 24/7 on-site laundry service for their convenience.s
                </p>
              </div>
            </div>

            <div className="safe-box flex gap-4 w-96  p-3 hover:shadow-lg hover:shadow-yellow-500 cursor-pointer rounded border border-yellow-400">
              <div className="">
                <MdOutlineRestaurant className="text-white bg-yellow-500 p-2 w-[80px] h-[80px]"></MdOutlineRestaurant>
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-2">Safe Box</h2>
                <p className="text-left">
                Our luxurious hotel offers a secure and convenient Safe Box facility to store your valuables.
                </p>
              </div>
            </div>

            <div className="parking flex gap-4 w-96  p-3 hover:shadow-lg hover:shadow-yellow-500 cursor-pointer rounded border border-yellow-400">
              <div className="">
                <MdOutlineRestaurant className="text-white bg-yellow-500 p-2 w-[80px] h-[80px]"></MdOutlineRestaurant>
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-2">Parking Area</h2>
                <p className="text-left">
                Private parking, valet service, electric car charging stations, secure access with CCTV surveillance.
                </p>
              </div>
            </div>

            </div>

            {/* <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className="tv"></div>
            <div className=""></div>
            <div className="parking"></div> */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;

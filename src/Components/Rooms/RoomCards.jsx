import { Link } from "react-router-dom";
// import image1 from "../../assets/images/2.jpg";
// import image2 from "../../assets/images/3.jpg";
// import image3 from "../../assets/images/4.jpg";
import { FaArrowRight } from "react-icons/fa";

const RoomCards = ({room}) => {
  // console.log(room);
  const {_id, roomImages, roomType, roomDescription, pricePerNight} = room || {};
  return (
    <>
      {/* card-1 */}
      <div className="lg:w-96 w-full px-2 bg-base-100 shadow-xl image-full border-2 border-dotted border-white ">
        <div className="relative">
          <img className="h-72" src={roomImages[1]} />
          <div className=" absolute bottom-0 right-0 bg-black py-1.5 px-4 mb-0 mr-0 opacity-70">
            <h3 style={{ letterSpacing: "2px" }} className="text-white text-lg font-medium">{'$ '+ pricePerNight +' / Night'}</h3>
          </div>
          {/* <div className="transform-cpu absolute flex items-center h-[380px] top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] "></div> */}
        </div>

        <div className="card-body text-black font-worSans text-center">
          <div className="text-center mt-6 space-y-4">
            <h2 className="uppercase text-2xl font-bold">{roomType}</h2>
            <p>
              {roomDescription}
            </p>
          </div>
          <div>
            <h3
              className="text-sm font-bold pt-12"
              style={{ letterSpacing: "2px" }}
            >
              <Link to={`/rooms/${_id}`} className="hover:text-yellow-600 flex justify-center items-center gap-1">
                ROOM DETAILS <FaArrowRight></FaArrowRight>
              </Link>
            </h3>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default RoomCards;

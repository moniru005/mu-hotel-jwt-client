import { Link } from "react-router-dom";
import image1 from "../../assets/images/2.jpg";
import image2 from "../../assets/images/3.jpg";
import image3 from "../../assets/images/4.jpg";
import { FaArrowRight } from "react-icons/fa";

const RoomCards = () => {
  return (
    <>
      {/* card-1 */}
      <div className="lg:w-96 w-full px-2 bg-base-100 shadow-xl image-full border-2 border-dotted border-white relative">
        <div>
          <img className="" src={image1} />
          {/* <div className="transform-cpu absolute flex items-center h-[380px] top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] "></div> */}
        </div>

        <div className="card-body top-0 text-black font-worSans text-center">
          {/* <div className=" bg-transparent border-2 rounded-2xl p-1 mb-3">
            <h3 className="text-black">26th - 28th Dec 2023</h3>
          </div> */}
          <div className="text-center mt-6 space-y-4">
            <h2 className="uppercase text-2xl font-bold">Standard Room</h2>
            <p>
              Our signature dish is the classic Shabu & Grill Platter which
              comes with an assortment that are grilled to perfection over a
              charcoal fire.
            </p>
          </div>
          <div>
            <h3
              className="text-sm font-bold pt-12"
              style={{ letterSpacing: "2px" }}
            >
              <Link to="/roomDetails" className="hover:text-yellow-600 flex justify-center items-center gap-1">
                ROOM DETAILS <FaArrowRight></FaArrowRight>
              </Link>
            </h3>
          </div>
        </div>
      </div>

      {/* card-2 */}
      <div className="lg:w-96 w-full px-2 bg-base-100 shadow-xl image-full border-2 border-dotted border-white relative">
        <div>
          <img className="" src={image2} />
          {/* <div className="transform-cpu absolute flex items-center h-[380px] top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] "></div> */}
        </div>

        <div className="card-body top-0 text-black font-worSans text-center">
          {/* <div className=" bg-transparent border-2 rounded-2xl p-1 mb-3">
            <h3 className="text-black">26th - 28th Dec 2023</h3>
          </div> */}
          <div className="text-center mt-6 space-y-4">
            <h2 className="uppercase text-2xl font-bold">Deluxe Room</h2>
            <p>
              Our signature dish is the classic Shabu & Grill Platter which
              comes with an assortment that are grilled to perfection over a
              charcoal fire.
            </p>
          </div>
          <div>
            <h3
              className="text-sm font-bold pt-12"
              style={{ letterSpacing: "2px" }}
            >
              <Link to="/roomDetails" className="hover:text-yellow-600 flex justify-center items-center gap-1">
                ROOM DETAILS <FaArrowRight></FaArrowRight>
              </Link>
            </h3>
          </div>
        </div>
      </div>

      {/* card-3 */}
      <div className="lg:w-96 w-full px-2 bg-base-100 shadow-xl image-full border-2 border-dotted border-white relative">
        <div>
          <img className="" src={image3} />
          {/* <div className="transform-cpu absolute flex items-center h-[380px] top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] "></div> */}
        </div>

        <div className="card-body top-0 text-black font-worSans text-center">
          {/* <div className=" bg-transparent border-2 rounded-2xl p-1 mb-3">
            <h3 className="text-black">26th - 28th Dec 2023</h3>
          </div> */}
          <div className="text-center mt-6 space-y-4">
            <h2 className="uppercase text-2xl font-bold">Premier Room</h2>
            <p>
              Our signature dish is the classic Shabu & Grill Platter which
              comes with an assortment that are grilled to perfection over a
              charcoal fire.
            </p>
          </div>
          <div>
            <h3
              className="text-sm font-bold pt-12"
              style={{ letterSpacing: "2px" }}
            >
              <Link to="/roomDetails" className="hover:text-yellow-600 flex justify-center items-center gap-1">
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

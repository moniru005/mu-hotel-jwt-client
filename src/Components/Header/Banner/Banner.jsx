import image1 from "../../../assets/images/2.jpg";
import image2 from "../../../assets/images/3.jpg";
import image3 from "../../../assets/images/4.jpg";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] top-0 font-worSans relative " >
      {/* Slider-1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full " />
        <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] ">
          <div className="text-white space-y-7 w-full mx-auto text-center">
            <h2 className="text-5xl font-medium ">Welcome to <span className="font-bold uppercase">Murn Inn</span></h2>
            <p className="capitalize text-4xl  ">
              Enjoy greatest pleasure in our hotel
            </p>

            <div className="flex gap-5 justify-center">
              <button className="btn bg-white text-black hover:bg-[#f1d516]">
                our Facilities <FaArrowRight></FaArrowRight>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Slider-2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full" />
        <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] ">
          <div className="text-white space-y-7 w-full mx-auto text-center">
            <h2 className="text-5xl font-medium ">A Family Adventures</h2>
            <p className="capitalize text-4xl">
              Enjoy greatest pleasure in our hotel
            </p>
            <div className="flex gap-5 justify-center">
            <button className="btn bg-white text-black hover:bg-[#f1d516]">
                our Facilities <FaArrowRight></FaArrowRight>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Slider-3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full" />
        <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] ">
          <div className="text-white space-y-7 w-full mx-auto text-center">
            <h2 className="text-5xl font-medium ">A Luxury Experience</h2>
            <p className="capitalize text-4xl">
              Enjoy greatest pleasure in our hotel
            </p>
            <div className="flex gap-5 justify-center">
            <button className="btn bg-white text-black hover:bg-[#f1d516]">
                our Facilities <FaArrowRight></FaArrowRight>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

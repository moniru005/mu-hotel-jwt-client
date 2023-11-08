import Banner from "../Components/Header/Banner/Banner";
import Newsletter from "../Components/Newsletter/Newsletter";
import Offer from "../Components/Offer/Offer";
import Rooms from "../Components/Rooms/Rooms";
import Testimonial from "../Components/Testimonial/Testimonial";
import Navbar from "../Components/Header/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import StandardRooms from "../Components/Rooms/StandardRooms";

const Home = () => {
  AOS.init();
  return (
    <div>
      <div className="absolute z-10 w-full">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>

      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
        <StandardRooms></StandardRooms>
      </div>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
        <Rooms></Rooms>
      </div>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
        <Offer></Offer>
      </div>

      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
        <Newsletter></Newsletter>
      </div>

      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;

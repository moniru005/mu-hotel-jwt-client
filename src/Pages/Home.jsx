import Banner from "../Components/Header/Banner/Banner";
import Newsletter from "../Components/Newsletter/Newsletter";
import Offer from "../Components/Offer/Offer";
import Rooms from "../Components/Rooms/Rooms";
import Testimonial from "../Components/Testimonial/Testimonial";
import Navbar from "../Components/Header/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="absolute z-10 w-full">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <Rooms></Rooms>
      <Offer></Offer>
      <Newsletter></Newsletter>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

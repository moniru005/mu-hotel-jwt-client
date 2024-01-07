import Banner from "../Components/Header/Banner/Banner";
import Newsletter from "../Components/Newsletter/Newsletter";
import Offer from "../Components/Offer/Offer";
import Rooms from "../Components/Rooms/Rooms";
import Testimonial from "../Components/Testimonial/Testimonial";
import Navbar from "../Components/Header/Navbar/Navbar";

import StandardRooms from "../Components/Rooms/StandardRooms";
import CallToAction from "../Components/CallToAction/CallToAction";
import DiningAndBar from "../Components/DiningAndBar/DiningAndBar";

const Home = () => {
  return (
    <div>
      <div className="absolute z-10 w-full">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <Offer></Offer>
      <StandardRooms></StandardRooms>
      <Rooms></Rooms>
      <DiningAndBar></DiningAndBar>
      <Newsletter></Newsletter>
      <Testimonial></Testimonial>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;

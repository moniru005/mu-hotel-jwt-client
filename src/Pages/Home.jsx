import Banner from "../Components/Header/Banner/Banner";
import Newsletter from "../Components/Newsletter/Newsletter";
import Offer from "../Components/Offer/Offer";
import Rooms from "../Components/Rooms/Rooms";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Rooms></Rooms>
        <Offer></Offer>
        <Newsletter></Newsletter>
        <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

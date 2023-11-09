import Navbar from "../Components/Header/Navbar/Navbar";

const AboutPage = () => {
  return (
    <div className="relative">
      <div className="absolute w-full z-50">
        <Navbar></Navbar>
      </div>
      <div className="">
          <img className="" src="https://i.ibb.co/wrmwXL3/2.jpg" alt="" />
          <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)100%)] z-0 "></div>
        </div>
      <div className="about-section my-20 px-10 font-worSans absolute top-20 text-white">
      <div className="text-center space-y-2 mb-24 font-worSans">
          <h2 className="font-worSans text-2xl text-yellow-600">
            We Are
          </h2>
          <h1 className="uppercase text-5xl font-bold" style={{ letterSpacing: "6px" }}>Seeside</h1>
        </div>
        <div className="flex ">
          <div className="h-96 flex w-1/2 gap-2 relative">
            <img  src="https://i.ibb.co/fMjZ0C6/a-1.jpg" alt="" />
            <img className="relative top-0" src="https://i.ibb.co/pKJJDp7/a-2.jpg" alt="" />
          </div>

          <div className="w-1/2">
            <h1 className="text-4xl font-bold py-4">The Luxury Experience You&apos;ll Remember</h1>
            <hr className="border-2 w-12 my-4 border-yellow-600" />
            <p>
            Welcome to our Luxurious Hotel, your home away from home. We are a luxury hotel located in the heart of downtown Toronto, Canada. Our goal is to provide exceptional service and accommodations for our guests. At MURN-INN we pride ourselves on providing an unforgettable experience with luxurious amenities and personalized service that will make you feel right at home. From the moment you walk through our doors, you can expect a warm welcome and attentive staff dedicated to making your stay as comfortable and enjoyable as possible. 
            </p>
            <button>Choose Rooms</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import Navbar from "../Components/Header/Navbar/Navbar";

const AboutPage = () => {
  return (
    <div className="lg:relative">
      <div className="lg:absolute lg:w-full lg:z-50 bg-slate-400 lg:bg-transparent">
        <Navbar></Navbar>
      </div>
      <div className="lg:flex lg:flex-col hidden">
          <img className="" src="https://i.ibb.co/wrmwXL3/2.jpg" alt="" />
          <div className="lg:absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)100%)] z-0 "></div>
        </div>
      <div className="about-section my-20 px-10 font-worSans lg:absolute lg:top-20 text-white">
      <div className="text-center space-y-2 mb-24 font-worSans">
          <h2 className="font-worSans text-2xl text-yellow-600">
            We Are
          </h2>
          <h1 className="uppercase text-black lg:text-white text-5xl font-bold" style={{ letterSpacing: "6px" }}>Seeside</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="h-96 flex w-1/2 gap-2 relative">
            <img  src="https://i.ibb.co/fMjZ0C6/a-1.jpg" alt="" />
            <img className="relative top-0" src="https://i.ibb.co/pKJJDp7/a-2.jpg" alt="" />
          </div>

          <div className="lg:w-1/2 w-full">
            <h1 className="text-4xl font-bold py-4 text-black lg:text-white">The Luxury Experience You&apos;ll Remember</h1>
            <hr className="border-2 w-12 my-4 border-yellow-600" />
            <p className="text-black lg:text-white">
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

const CallToAction = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-duration="2000"
      className="mt-16 font-workSans"
    >
      <div className="relative mt-12 font-workSans bg-gradient-to-r from-[#0C1632] to-yellow-600 h-[350px] mx-auto flex justify-center px-2 lg:px-0">
        <div className="lg:top-12 flex flex-col lg:flex-row  items-center justify-evenly mx-auto gap-12 w-full">
          <div className="lg:w-5/12 lg:space-y-3 w-full text-center text-white ">
            <h2 className=" font-semibold text-2xl lg:text-[40px]">
                Your trusted travel partner
            </h2>
            <p className="py-3 text-sm lg:text-base">
              Book Your Travel - Online Hotel Reservation System. <br />
              It Doesn&apos;t Get Better Than This.
            </p>
            <button className="btn text-sm bg-yellow-600 text-white hover:text-black hover:bg-yellow-400">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

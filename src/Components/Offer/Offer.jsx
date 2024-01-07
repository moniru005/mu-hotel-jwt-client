const Offer = () => {
  return (
    <>
   
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000" className="pt-20 lg:max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-worSans text-2xl text-yellow-600">
            Special Offer
          </h2>
          <h1 className="uppercase text-4xl font-bold">offer</h1>
        </div>
        <div>
          {/* cards */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            {/* card-1 */}
            <div className="lg:w-96 w-full bg-base-100 shadow-xl image-full border-2 border-dotted relative">
              <img className="" src="https://i.ibb.co/mRSL6Mq/1.jpg" />
              <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] "></div>

              <div className="card-body absolute top-0 text-white font-worSans text-center">
                <div className="bg-transparent border-2 rounded-2xl p-1 mb-3">
                  <h3>26th - 28th Dec 2023</h3>
                </div>
                <div className="text-center mt-6 space-y-4">
                  <h2 className="uppercase text-2xl font-bold">
                    shabu & Grill
                  </h2>
                  <p>
                    Our signature dish is the classic Shabu & Grill Platter
                    which comes with an assortment that are grilled to
                    perfection over a charcoal fire.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold pt-12"
                    style={{ letterSpacing: "10px" }} >
                    CULINARY
                  </h3>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="lg:w-96 w-full bg-base-100 shadow-xl image-full border-2 border-dotted relative">
              <img className="" src="https://i.ibb.co/zNzfQhr/2.jpg" />
              <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] "></div>

              <div className="card-body absolute top-0 text-white font-worSans text-center">
                <div className="bg-transparent border-2 rounded-2xl p-1 mb-3">
                  <h3>28th - 30th Dec 2023</h3>
                </div>
                <div className="text-center mt-6 space-y-4">
                  <h2 className="uppercase text-2xl font-bold tracking-widest">
                    PAY 1 <span className="text-yellow-500">GET 2</span>
                  </h2>
                  <p>
                    We offer pay 1 get 2. These deals are usually offered for
                    certain items. To check our website or ask the staff when
                    you visit the store.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold pt-12"
                    style={{ letterSpacing: "10px" }} >
                    CULINARY
                  </h3>
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className="lg:w-96  w-full bg-base-100 shadow-xl image-full border-2 border-dotted relative">
              <img className="" src="https://i.ibb.co/s2V9tYP/3.jpg" />
              <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] "></div>

              <div className="card-body absolute top-0 text-white font-worSans text-center">
                <div className="bg-transparent border-2 rounded-2xl p-1 mb-3">
                  <h3>26th - 28th Dec 2023</h3>
                </div>
                <div className="text-center mt-6 space-y-4">
                  <h2 className="uppercase text-2xl font-bold">
                    FLASH DEAL <br />
                    <span className="text-yellow-500"> 60% OFF</span>
                  </h2>
                  <p>
                    This offer is only available for a limited time. You must
                    book your hotel reservation before the expiration date
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold pt-12"
                    style={{ letterSpacing: "10px" }} >
                    HOTEL ROOM
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;

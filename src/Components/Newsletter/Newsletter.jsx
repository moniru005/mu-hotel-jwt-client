const Newsletter = () => {
  return (
    <div className="bg-black lg:max-w-6xl mx-auto font-worSans mt-20  rounded">
        
      <div className="flex flex-col lg:flex-row gap-4 items-center px-4 py-12 ">
        <div className="w-1/2 text-center space-y-3">
          <h2 className="text-white text-3xl">Sign up for our newsletter</h2>
          <p className="text-white">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
        </div>

        <div className="w-1/2">
          <div className="join flex justify-center">
            <div>
              <div>
                <input className="input input-bordered join-item" placeholder="Search" />
              </div>
            </div>
            <div className="indicator">
              <button className="btn join-item capitalize">Subscribe</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;

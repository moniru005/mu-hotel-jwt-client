import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState();
  const axios = useAxios()

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(email);

    try{
      const res = await axios.post('/subscriber', {email: email})
      console.log(res);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You are Subscribed",
        showConfirmButton: false,
        timer: 1500
      });
      form.reset()
    }
    catch(err){
      console.log(err);
    }
  };
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
                <form onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    onBlur={(e) => setEmail(e.target.value)}
                    name="email"
                    className="input input-bordered join-item"
                    placeholder="Email"
                  />
                  <input type="submit" value="Subscribe" className="btn join-item capitalize" />
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

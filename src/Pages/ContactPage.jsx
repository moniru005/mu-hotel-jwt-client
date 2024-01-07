import Swal from "sweetalert2";
import Navbar from "../Components/Header/Navbar/Navbar";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";

const ContactPage = () => {
  const axios = useAxios();
  const {user} = useAuth();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const contactInfo = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    };

    axios.post('/contacts', contactInfo)
        .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Thanks for for your feedback`,
                    showConfirmButton: false,
                    timer: 2500,
                  });
                  form.reset();
            }
        })

  };

  return (
    <div>
      <div className="shadow-lg bg-slate-500">
        <Navbar></Navbar>
      </div>

      <div className="text-center space-y-2 my-12 font-worSans">
        <h2 className="font-worSans text-2xl text-yellow-600">We Are</h2>
        <h1
          className="uppercase text-5xl font-bold"
          style={{ letterSpacing: "6px" }}
        >
          Seeside
        </h1>
      </div>
      {/*  */}

      <div className="max-w-screen-lg mx-auto p-5 font-worSans">
        <div className="grid grid-cols-1 md:grid-cols-12 border-yellow-500 border">
          <div className="bg-gray-900 md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-yellow-600">Touch</span>
            </h3>
            <p className="mt-4  text-gray-200 text-left">
              Thank you for reaching out! We would love to hear from you. Please
              feel free to contact us with any questions or comments you may
              have, and we will get back to you as soon as possible. You can
              reach us via email at info@murnhotel.com or by phone at (123)
              456-7890. Thank you again for your interest in our company, and we
              look forward to hearing from you!
            </p>

            <div className="flex items-center mt-5">
              <span className="text-sm">
                House #14, Street #12, Darulaman Road, Toronto, Canada.
              </span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-sm">+93 749 99 65 50</span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-sm">24/7</span>
            </div>
          </div>
          {/* Contact Form */}
          <form onSubmit={handleContactSubmit} className="md:col-span-8 p-10">
            {/* Name */}
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* First Name */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="firstName"
                  placeholder="Jhon"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              {/* Last Name */}
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* Email */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  name="email"
                  placeholder="********@*****.**"
                  defaultValue={user.email}
                />
              </div>
              {/* Phone */}
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="message" placeholder="Write your Message"
                ></textarea>
              </div>
              <div className="w-full px-3">
                <button
                  className="shadow bg-yellow-600 hover:bg-[#E4CBC1]  hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

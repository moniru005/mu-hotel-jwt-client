import photo1 from "../../assets/images/2.jpg";
import photo2 from "../../assets/images/3.jpg";
import photo3 from "../../assets/images/4.jpg";
import { CgProfile } from "react-icons/cg";
import { TbRulerMeasure } from "react-icons/tb";
import { LiaBedSolid } from "react-icons/lia";
import { GiCheckMark } from "react-icons/gi";
const RoomDetailsCard = () => {
  return (
      <div className="max-w-6xl font-worSans">
        <div className="images ">
          <div className="">
            <img className="p-4 rounded-lg " src={photo1} alt="" />
          </div>
          <div className="flex flex-col lg:flex-row w-96">
            <img className="p-4" src={photo1} alt="" />
            <img className="p-4" src={photo2} alt="" />
            <img className="p-4" src={photo3} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-4 justify-items-center gap-4 border-2 mt-6 mx-4 mb-6 px-4 py-10 bg-black text-white">
          {/* <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#e49b34] to-[rgba(21, 21, 21, 0.00) 100%)] z-0 "></div> */}
          <div className="flex items-center gap-2">
            <CgProfile className="text-4xl"></CgProfile>
            <p className="text-2xl font-medium">4 Guest</p>
          </div>
          <div className="flex items-center gap-2">
            <TbRulerMeasure className="text-4xl"></TbRulerMeasure>
            <p className="text-2xl font-medium">70 ft</p>
          </div>
          <div className="flex items-center gap-2">
            <LiaBedSolid className="text-4xl"></LiaBedSolid>
            <p className="text-2xl font-medium">$ 79 / Night</p>
          </div>
          <div>
            <button className="py-2 px-6 text-lg font-medium bg-yellow-600 hover:bg-yellow-700 text-white ">
              Book Now
            </button>
          </div>
        </div>

        <div className="overview flex">
          <div className="p-4 w-8/12 space-y-3">
            <h2 className="text-2xl font-medium uppercase">Room Overview</h2>
            <p>
              Our standard rooms provide a comfortable stay with all the
              essential amenities. Each room includes one queen-sized bed or two
              twin beds, air conditioning, complimentary Wi-Fi access, cable
              television, an alarm clock radio and a writing desk. The private
              bathroom features a shower/tub combination and complimentary
              toiletries. All of our rooms are non-smoking.
            </p>
          </div>
          <div className="p-4 w-4/12 space-y-3">
            <h2 className="text-2xl font-medium uppercase">Room Facilities</h2>
            <ul className="space-y-2">
              <li className="flex gap-1 items-center">
                {" "}
                <GiCheckMark /> comfortable mattress bed
              </li>
              <li className="flex gap-1 items-center">
                {" "}
                <GiCheckMark />
                Flat-screen television{" "}
              </li>
              <li className="flex gap-1 items-center">
                {" "}
                <GiCheckMark />
                Hot & Cold Bathing
              </li>
              <li className="flex gap-1 items-center">
                {" "}
                <GiCheckMark />
                Complimentary Wi-Fi access
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default RoomDetailsCard;

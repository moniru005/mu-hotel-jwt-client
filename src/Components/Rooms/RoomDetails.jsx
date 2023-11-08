import { useEffect, useState } from "react";
import Navbar from "../Header/Navbar/Navbar";
import RoomDetailsCard from "./RoomDetailsCard";
import { useLoaderData, useParams } from "react-router-dom";



const RoomDetails = () => {
  const[room, setRoom] = useState();

  const collectRooms = useLoaderData();
  const {id} = useParams();

  useEffect(() => {
    const findRoom = collectRooms.find((item) => item._id === id);
    setRoom(findRoom);
  }, [id, collectRooms]);

console.log(typeof room);


  return (
    <>
      <div className="shadow-lg bg-slate-500">
        <Navbar></Navbar>
      </div>
      <div className="pt-20 lg:max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-worSans text-2xl text-yellow-600">Room</h2>
          <h1
            className="uppercase text-4xl font-bold"
            style={{ letterSpacing: "10px" }}
          >
            Details
          </h1>
        </div>
        <div>
          {/* cards */}
          <div className="flex flex-col justify-center items-center lg:flex-row gap-4">
            <RoomDetailsCard rooms={room}> </RoomDetailsCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;

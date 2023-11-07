// import { useState } from "react";
import RoomCards from "./RoomCards";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import Loading from "../Loading/Loading";
import { useState } from "react";

const Rooms = () => {
  // const [rooms, setRooms] = useState();
  const axios = useAxios();
  const [showAll, setShowAll] = useState(false);

  const getRooms = async() =>{
    const res = await axios.get('/rooms');
    return res;
  }

  const {data: rooms, isLoading} = useQuery({
    queryKey: ["room"],
    queryFn: getRooms,
  });

  if(isLoading){
    <Loading></Loading>
  }

  return (
    <div className="pt-20 lg:max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-10">
        <h2 className="font-worSans text-2xl text-yellow-600">Featured</h2>
        <h1 className="uppercase text-4xl font-bold" style={{ letterSpacing: "10px" }}>ROOMS</h1>
      </div>
      <div>
        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10">
        {
            showAll?
            rooms?.data?.map(room => <RoomCards key={room._id} room={room}></RoomCards>)
            :
            rooms?.data?.slice(0, 6)?.map(room => <RoomCards key={room._id} room={room}></RoomCards>)
        }
        </div>
        <div className="mt-10">
          {
            !showAll?
            <button onClick={() => setShowAll(!showAll)} className="btn bg-yellow-600 text-white mx-auto flex">
            Load more
          </button>
          :
          ""
          }
        </div>
      </div>
    </div>
  );
};

export default Rooms;

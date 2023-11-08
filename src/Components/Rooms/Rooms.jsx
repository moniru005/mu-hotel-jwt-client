// import { useState } from "react";
import RoomCards from "./RoomCards";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { useState } from "react";
import useAxios from "../../Hooks/useAxios";

const categories = ["Standard", "Luxury", "Business", "Family", "Nature"];

const Rooms = () => {
  const axios = useAxios();
  const [showAll, setShowAll] = useState(false);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const getRooms = async () => {
    const res = await axios.get(
      `/rooms?sortField=pricePerNight&sortOrder=${price}&category=${category}`
    );
    return res;
  };
  const {
    data: rooms,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["room", price, category],
    queryFn: getRooms,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return (
      <p className="flex justify-center">Something Wrong: {error.message}</p>
    );
  }

  return (
    <div className="pt-20 lg:max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-10">
        <h2 className="font-worSans text-2xl text-yellow-600">Featured</h2>
        <h1
          className="uppercase text-4xl font-bold"
          style={{ letterSpacing: "10px" }}
        >
          ROOMS
        </h1>
      </div>
      <div className="flex justify-between items-center mt-10 font-worSans border-yellow-600 border-2 p-4 border-opacity-10">
        <div className="text-black text-lg">
          Here the total {rooms?.data.length} Rooms you choose from
        </div>

        <div className="flex items-center gap-10 pr-6 text-lg">
          <div>
            <select className="" onChange={(e) => setPrice(e.target.value)}>
              <option disabled selected>
                Sorting Price
              </option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
          <div>
            <select className="" onChange={(e) => setCategory(e.target.value)}>
              <option disabled selected>
                Choose Category
              </option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div>
        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 justify-items-center">
          {showAll
            ? rooms?.data?.map((room) => (
                <RoomCards key={room._id} room={room}></RoomCards>
              ))
            : rooms?.data
                ?.slice(0, 6)
                ?.map((room) => (
                  <RoomCards key={room._id} room={room}></RoomCards>
                ))}
        </div>
        <div className="mt-10">
          {!showAll ? (
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn bg-yellow-600 text-white mx-auto flex"
            >
              Load more
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;

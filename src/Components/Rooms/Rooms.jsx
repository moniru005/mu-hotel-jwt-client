import RoomCards from "./RoomCards";

const Rooms = () => {
  return (
    <div className="pt-20 lg:max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-10">
        <h2 className="font-worSans text-2xl text-yellow-600">Featured</h2>
        <h1 className="uppercase text-4xl font-bold" style={{ letterSpacing: "10px" }}>ROOMS</h1>
      </div>
      <div>
        {/* cards */}
        <div className="flex flex-col justify-center items-center lg:flex-row gap-4">
          <RoomCards></RoomCards>
        </div>
      </div>
    </div>
  );
};

export default Rooms;

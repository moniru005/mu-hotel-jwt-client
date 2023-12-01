import { useEffect, useState } from "react";
// import useAxios from "./useAxios";

const useRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/rooms', {credentials:"include"})
    .then(res => res.json())
    .then(data =>setRooms(data))
    
  }, []);
  return rooms;
};

export default useRooms;

import { FaTrashAlt } from 'react-icons/fa';
const MyBookingRow = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, name, email, startDate, endDate, roomType, price, status } =
    booking || {};

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle hover:bg-red-600 hover:text-white">
          <FaTrashAlt></FaTrashAlt>
        </button>
      </th>
      <td className="text-left">
        <div className="flex  space-x-3">
          <div className="avatar text-left">
            {/* <div className="rounded w-24 h-24">
              <img src="" alt="Avatar " />
            </div> */}
          </div>
          <div className="">
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{roomType}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td className="text-base">{"$ " + price}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-green-700">Confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-ghost btn-sm text-yellow-600 hover:bg-yellow-600 hover:text-white"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default MyBookingRow;

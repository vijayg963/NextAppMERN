import React from "react";

const RoomCard = ({ room }) => {
  return (
    <div className="card">
      <div></div>
      <h2>ID : {room._id}</h2>
      <h3>Name :- {room.name}</h3>
    </div>
  );
};

export default RoomCard;

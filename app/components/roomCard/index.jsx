import React from "react";

const RoomCard = ({ room }) => {
  const { _id, name, summary } = room;
  return (
    <div className="card">
      <div></div>
      <h2>ID : {_id}</h2>
      <h3>Name :- {name}</h3>
      <h3>Summary :- {summary}</h3>
    </div>
  );
};

export default RoomCard;

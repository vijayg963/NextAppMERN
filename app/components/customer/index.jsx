import React from "react";

const Customer = ({ customer }) => {
  return (
    <div className="card">
      <h2>ID : {customer._id}</h2>
      <h3>User Name :- {customer.username}</h3>
      <h3>Name :- {customer.name}</h3>
      <h3>Address :- {customer.address}</h3>
    </div>
  );
};

export default Customer;

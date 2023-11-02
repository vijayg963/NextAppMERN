import Link from "next/link";
import React from "react";
import Styles from "./style.module.css";

const Customer = ({ customer }) => {
  const { _id, username, name, address, email } = customer;
  return (
    <div className="card">
      <h2>ID : {_id}</h2>
      <h3>User Name :- {username}</h3>
      <p>
        Email :-
        <Link href={email}>{email}</Link>
      </p>
      <h3>Name :- {name}</h3>
      <address>Address :- {address}</address>
    </div>
  );
};

export default Customer;

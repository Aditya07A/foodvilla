import React from "react";
import { useState } from "react";

// const User = (props) => {
//destructuring
const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      {/* <h2>Name: John</h2> */}
      {/* <h2>Name: {props.name}</h2> */}
      <h2>Count : {count}</h2>
      <h2>Count-2 : {count2}</h2>
      <h2>{name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>contact:john@gmail.com</h4>
    </div>
  );
};

export default User;

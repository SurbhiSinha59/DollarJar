import React from "react";
import "./Person.css";

const person = Props => {
  //   var total = 0;

  //   const click = () => {
  //     total = total + 10;
  //   };

  return (
    <div className="Person">
      <p>{Props.name}</p>
      {/* <input type="text"></input> */}
      <button onClick={Props.addAmt}>ADD</button>{" "}
      <button onClick={Props.subAmt}>SUB</button>
      <p>{Props.total}</p>
    </div>
  );
};
export default person;

import React from "react";

export function Persons({personData}) {
  return (
    <div>
      <h1>
        My name is {personData.name} and i know {personData.skills}
      </h1>
    </div>
  );
}

export default Persons;

import React from "react";

export function Persons({person}) {
  return (
    <div>
      <h1>
        My name is {person.name} and i know {person.skills}
      </h1>
    </div>
  );
}

export default Persons;

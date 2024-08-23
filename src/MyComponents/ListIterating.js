import React from "react";
import {Persons} from "./Persons"
export function ListIterating() {
  const persons = [
    {
      id: 1,
      name: "Anvesh",
      skills: "Angular",
    },
    {
      id: 2,
      name: "Amber",
      skills: "React",
    },
    {
      id: 3,
      name: "Bablu",
      skills: "Booba",
    },
  ];
  const personList = persons.map( person => <Persons key={person.id} personData = {person} />)
  return (
  <div>{personList}</div>
)
}

export default ListIterating;

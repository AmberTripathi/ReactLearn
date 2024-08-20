import React, { createElement } from "react";
export const Hello = (props) => {
  console.log(props);
  //props get printed as object --> name, last, standard along with their values

  //With JSX
  return (
    <div className="dummy class">
      <h1>{props.name}, this is using jsx</h1>
    </div>
  );
  //Without using JSX
  //return createElement('div',null,createElement('h1', null,props.name+", this is without jsx"))
};

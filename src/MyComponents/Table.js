import React from "react";
import { Column } from "./Column";
export function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Column name="Name" standard="Standard" subject="Subject" />
        </tr>
        <tr>
          <Column name="Amber" standard="10th" subject="Maths" />
        </tr>
        <tr>
          <Column name="Swappy" standard="9th" subject="Chemistry" />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;

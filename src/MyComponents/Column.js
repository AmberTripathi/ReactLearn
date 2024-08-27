import React from 'react'

export function Column({name,subject,standard}) {
  return (
    //should be empty inside or use React.Fragment
    <>
        <td>{name}</td>
        <td>{subject}</td>
        <td>{standard}</td>
    </>
  )
}

export default Column
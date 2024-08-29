//we want to send props directly to component c
import React from 'react'
import { ComponentB } from "./ComponentB";
export function ComponentA() {
  return (
    <div><ComponentB/></div>
  )
}

export default ComponentA
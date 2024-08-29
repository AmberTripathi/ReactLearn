import React from 'react'
import { UserConsumer } from "./userContext";
export function ComponentC() {
  return (
    <UserConsumer>
        {(username) => {
            return <div>Hello {username}</div>
        }}
    </UserConsumer>
  )
}

export default ComponentC
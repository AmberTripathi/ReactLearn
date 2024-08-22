import React from 'react'

export function Click() {
     const clickHandler=()=> {
        console.log('Button is clicked')
    }
  return (<div>
    <button onClick={clickHandler}>Click-Button</button>
    </div>
    )
}

export default Click
import React from 'react'

export const Greet = ({name,heroName}) => {
    //or you can destructure using 
    //const {name,heroName} = props
  return (
    <h3>Greetings, <h1>{name}the {heroName}</h1></h3>
  )
}

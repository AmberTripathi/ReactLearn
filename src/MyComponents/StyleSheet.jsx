import React from 'react'
import "./myStyles.css"

export function StyleSheet(props) {
    let className = props.primary?'primary':'btn btn-danger'
  return (
    <h1 className = {className}>StyleSheet</h1>
  )
}

export default StyleSheet
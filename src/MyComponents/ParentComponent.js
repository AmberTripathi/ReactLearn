import React, { Component } from 'react'
import {ChildComponent} from "./ChildComponent";

export class ParentComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: "Amber"
        }
        
    }
    greetParent=()=>{
        alert(`Hello ${this.state.name}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
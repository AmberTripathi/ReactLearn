import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        super();
        this.state = {
            value:0
        }
    }
    valueUpdate() {
        this.setState({
            value:this.state.value+1
        })
    }
  render() {
    return (
      <><h1>Counter = {this.state.value}</h1>
      <button className="btn btn-danger" onClick={()=>this.valueUpdate()}>Click me to increase the value above!!</button>
      </>
      )
  }
}

export default Counter
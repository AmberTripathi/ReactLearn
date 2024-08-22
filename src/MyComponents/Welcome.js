import React, { Component } from 'react'

export class Welcome extends Component {
     
  render() {
    //destructuring the props and state syntax
    //const {name} = this.props
    //const{state1,state2} = this.state
    return (<>
      <h1>Hey this is a welcome message to {this.props.name} </h1>
      {/* <h1>Hey this is a welcome message to {this.name} </h1> */}
      </>
      )
  }
}

export default Welcome
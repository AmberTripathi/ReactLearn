import React, { Component } from 'react'

export class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            message:"Welcome "+ props.name
        }
    }
    changeMessage() {
        this.setState({
            message: "Thanks for visiting "+this.props.name
        })
    }
  render() {
    return (<>
      <h1>{this.state.message}</h1>
      <button className="btn btn-danger" onClick={()=>this.changeMessage()}>Button</button>
      </>
      )
  }
}

export default Welcome
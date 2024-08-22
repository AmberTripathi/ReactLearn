import React, { Component } from 'react'

export class Message extends Component {
    constructor() {
        super()
            this.state={
                message: "Message Before Clicking"       
    }   
    }
    changeMessage() {
        this.setState({
            message:"Message after the click"
        }  
     )
    }
    
  render() {
    return (
    <div>
      <h1>{this.state.message}</h1>
      <button className="btn btn-danger"onClick={()=>this.changeMessage()}>Subscribe</button>
    </div>
      )
  }
}

export default Message
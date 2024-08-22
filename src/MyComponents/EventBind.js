import React, { Component } from 'react'

export class EventBind extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Hello'
        }
  //      this.clickHandler = this.clickHandler.bind(this) // ----> (1)
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'Button clicked'
    //     })
    // }
    //or directly use function as an arrow function, you then wont need to use bind
    clickHandler=()=>{
        this.setState({
            message: 'Button clicked'
        })
    }
  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            {/* if we use (1) we can directly use this code */}
            <button className='btn btn-danger' onClick={this.clickHandler}>Clickkkk!</button>
            {/* <button className='btn btn-danger' onClick={()=>this.clickHandler()}>Clickkkk!</button> */}
        </div>
    )
  }
}

export default EventBind
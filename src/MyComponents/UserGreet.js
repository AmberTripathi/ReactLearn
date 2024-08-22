import React, { Component } from 'react'

export class UserGreet extends Component {
    constructor() {
        super();
        this.state={
            isLogged:false
        }
    }
  render() {
    //we can use if else too and this short circuit too that returns if true else it does not display anything
   // return (this.state.isLogged) && <h1>Hello User</h1>;
    return (
      <div>
        {this.state.isLogged?<h1>Welcome Amber</h1>:<h1>Welcome Guest</h1>}
      </div>
    )
  }
}

export default UserGreet
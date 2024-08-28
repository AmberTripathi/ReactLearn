import React, { Component } from 'react'
import {MemoComp} from "./MemoComp";
export class MemosParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Amber"
      }
    }
    componentDidMount() {
        setInterval(() => {
          this.setState({
            name: "Amber"
          })
        }, 2000);
      }
    
  render() {
    console.log("*********parent render***********");
    
    return (
      <div>
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default MemosParent
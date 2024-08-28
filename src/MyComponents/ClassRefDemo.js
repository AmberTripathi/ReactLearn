import React, { Component } from 'react'

export class ClassRefDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus()
    console.log(this.inputRef);
    
  }

  render() {
    return (
      <>
        <label>Name</label>
        <input type="text" ref={this.inputRef} />
      </>
    )
  }
}

export default ClassRefDemo
import React, { Component } from 'react';

export class ClassClick extends Component {
   clickHandler() {
    console.log('Button clicked!');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click to check event handling by classes</button>
      </div>
    );
  }
}

export default ClassClick;

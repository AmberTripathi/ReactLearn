import React, { Component } from "react";

export class NewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      option: "",
      gender: "",
    };
  }
  onChangeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangeCommentsHandler = (event) => {
    this.setState({ comments: event.target.value });
  };

  onChangeOptionHandler = (event) => {
    this.setState({ option: event.target.value });
  };

  onChangeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    //logged as an object
    console.log(this.state);
    alert(
      `${this.state.username} ${this.state.comments} ${this.state.gender} ${this.state.option}`
    );
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.onChangeUsernameHandler}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.onChangeCommentsHandler}
          ></textarea>
        </div>
        <div>
          <label>Choose an option</label>
          <select
            value={this.state.option}
            onChange={this.onChangeOptionHandler}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={this.state.gender === "male"}
            onChange={this.onChangeGenderHandler}
          />
          Male
          <input
            type="radio"
            value="female"
            name="gender"
            checked={this.state.gender === "female"}
            onChange={this.onChangeGenderHandler}
          />
          Female
        </div>
        <button type="submit" className="btn btn-danger">
          Submit Form
        </button>
      </form>
    );
  }
}

export default NewForm;

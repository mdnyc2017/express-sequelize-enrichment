import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
  constructor() {
    super()
    this.state = '';
  }

  render() {
  return (
    <div id="main" className="main-div">

      <div id="newUserContainer">

      </div>
    </div>
  )


}

// 	- Each UserComponent must have:
// 		- A list of awards (if any)
// 		- A 'Remove Mentor' button, if the user has a mentor
// 		- A 'Set Mentor' form, with a selection of all available users
// 		- A 'Delete Award' button that removes an award on click
// 		- A 'Delete User' button that removes the user on click
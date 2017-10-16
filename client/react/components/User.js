
import React, { Component } from 'react';
import axios from 'axios';

const User = require('../models/models.js')


export default class User extends Component{
  constructor() {
    super()
    this.state = '';
  }

  handleSubmit(event){
    event.preventDefault();
    axios.post('/', (req, res, next) =>{
        User.create(req.body)
        .then(res.json({message: 'User Created'}))
        .catch(next)
  })
}

  render() {
    return(
      // - AddUser : a form for adding a new user to the list/db
      <form id="add-form" onSubmit={this.handleSubmit}>
        <input id='create' ref="description" type='text' placeholder='Add a user!' />
      </form>

          
          )

  }

}
// - UserList : a list of all users
// - UserComponent : an individual user
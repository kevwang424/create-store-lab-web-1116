import React, { Component } from 'react';

class UserInput extends Component {

  constructor(){
    super()
    this.state = {
      userName: "",
      hometown: ""
    }

    this.handleUser = this.handleUser.bind(this)
    this.handleHometown = this.handleHometown.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUser(event){
    this.setState({userName: event.target.value})
  }

  handleHometown(event){
    this.setState({hometown: event.target.value})
  }

  handleSubmit(event){
    debugger
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', payload: this.state})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" onChange={this.handleUser} value={this.state.userName}/>
          <label>Hometown</label>
          <input type="text" onChange={this.handleHometown} value={this.state.hometown}/>
          <input type="button" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default UserInput;

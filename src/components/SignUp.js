import React, { Component } from 'react';
import Border from '.components/Border';
import Dialog from '.components/Border';

class SignUp extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }
  handleChange(e) {
 this.setState({login: e.target.value});
  }

  handleSignUp() {
 alert(`Welcome aboard, ${this.state.login}!`);
  }

  render(){
    return(
      <Dialog title="Venus Exploration Program" message="How shall we refer you?" >
      <input value={this.state.login} onChange={this.handleChange} />
      <button onClick={this.handleSignUp}> Sign me up!</button>
      </Dialog>
    )
  }
}
export default SignUp

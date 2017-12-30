import React, { Component } from 'react';
import Border from './components/Border';
import Dialog from './components/Dialog';
import SignUp from './components/SignUp';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="root">
        <SignUp/>
      </div>
    );
  }
}

export default App;

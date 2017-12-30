import React, { Component } from 'react';
import Border from './components/Border';

function Dialog(props) {
  return(
    <Border color='green'>
    <h1 className="Dialog-title">{props.title}</h1>
    <p className="Dialog-message">{props.message}</p>
    {props.children}
    </Border>
  );
}
export default Dialog

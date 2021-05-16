import React, { Component } from 'react';
import Display from '../components/Display';

export default class NameTag extends Component {
  state = {
    greetingText: '',
    nameText: '',
  };

  handleGreetingChange = (e) => {
    e.preventDefault();
    this.setState({ greetingText: e.target.value });
  };

  handleNameChange = (e) => {
    e.preventDefault();
    this.setState({ nameText: e.target.value });
  };

  render() {
    return (
      <>
        <Display
          greeting={this.state.greetingText}
          name={this.state.nameText}
          handleChangeGreeting={this.handleGreetingChange}
          handleChangeName={this.handleNameChange}
        />
      </>
    );
  }
}

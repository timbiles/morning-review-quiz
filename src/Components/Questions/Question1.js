// Stateful Component

import React, { Component } from 'react';

class Question1 extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  handleChange(val) {
    this.setState({ input: val });
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="question">
        <h4>Question 1</h4>
        <p>What is 4 + 4?</p>
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        {this.props.answer == this.state.input ? (
          <p>That is correct answer. Way to go!!</p>
        ) : this.state.input !== '' ? (
          <p>Don't give up. Keep trying!</p>
        ) : (
          <p />
        )}
      </div>
    );
  }
}

export default Question1;

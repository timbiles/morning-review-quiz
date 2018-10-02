import React, { Component } from 'react';

import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';
import Question3 from './Questions/Question3';

import './Quiz.css';

class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      question1: 8,
      question2: 'wood',
      input:  '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({ input: val });
  }

  render() {
    const { question1, question2, input } = this.state;
    return (
      <div>
        <h1>Quiz</h1>
        <Question1 answer={question1} />
        <Question2
          answer={question2}
          handleChange={this.handleChange}
          input={input}
        />
        <Question3 />
      </div>
    );
  }
}

export default Quiz;

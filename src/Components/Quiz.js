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
      answer: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(val) {
    this.setState({ input: val });
    this.state.input == this.state.question2 
    ? this.setState({answer:true})
    : this.setState({answer:false})
  }


  answer1 = () => {
      this.setState({answer1: true})
  }

  render() {
    const { question1, question2, input, answer } = this.state;
    return (
      <div>
          
        <h1>Quiz</h1>
        <Question1 
            answer={question1}
        />
        <Question2
          question2={question2}
          handleChange={this.handleChange}
          input={input}
          answer={answer}
        />
        <Question3 />
      </div>
    );
  }
}

export default Quiz;

// Stateful Component

import React, { Component } from 'react';

class Question1 extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      answer: false
    };
  }

  async handleChange(val) {
    await this.setState({ input: val });
    await this.state.input == this.props.question1 
    ? this.setState({answer:true})
    : this.setState({answer:false})
  }


  render() {
      const {answer} = this.state
      console.log(this.props.name)
    return (
      <div className={answer ? 'question' : 'check'}>
        <h4>Question 1</h4>
        <p>What is 4 + 4?</p>
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        {this.props.question1 == this.state.input ? ( 
          <p>That is correct answer. Way to go!!</p>
        ) : this.state.input !== '' && (
          <p>Don't give up. Keep trying!</p>
        
        )}
      </div>
    );
  }
}

export default Question1;

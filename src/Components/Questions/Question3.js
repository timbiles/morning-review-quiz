import React, { Component } from 'react';

import MultipleChoice from './MultipleChoice';

class Question3 extends Component {

    handleClick(){
        window.alert('wrong!')
    }

    handleClick2(){
        window.alert('I am deathly afraid of the dark.')
    }

  render() {
    return (
      <div className="question">
        <h4>Question 3</h4>
        <p>What is Tim's biggest fear?</p>

        <MultipleChoice handleClick={this.handleClick} handleClick2={this.handleClick2}/>

      </div>
    );
  }
}

export default Question3;

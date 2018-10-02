// Functional Component

import React from 'react';

const Question2 = props => {
  return (
    <div className={props.answer ? 'question' : 'check'}>

      <h4>Question 2</h4>
      <p>Finish this phrase...</p>
      <p>How much wood would a woodchuck chuck if a woodchuck could chuck ?</p>
      <input type="text" onChange={(e) => props.handleChange(e.target.value)}/>
      {props.question2 === props.input 
        ? <p>You are so smart!</p>
        : <p>Better luck next time.</p>
    }
    </div>
  );
};

export default Question2;
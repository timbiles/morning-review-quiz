// Functional Component

import React from 'react';

const Question2 = props => {
    console.log(props)
  return (
    <div className='question'>
      <h4>Question 2</h4>
      <p>Finish this phrase...</p>
      <p>How much wood would a woodchuck chuck if a woodchuck could chuck ?</p>
      <input type="text" onChange={(e) => props.handleChange(e.target.value)}/>
      {props.answer === props.input 
        ? <p>You are so smart!</p>
        : <p>Better luck next time.</p>
    }
    </div>
  );
};

export default Question2;
import React from 'react';

const MultipleChoice = (props) => {
    return (
        <div className='multiple_choice'>
            <div className="multiple">
            <button
                onClick={()=> props.handleClick()}
            >A.</button>
          <p>Drowning</p>
        </div>
        <div className="multiple">
        <button
                onClick={()=> props.handleClick()}
        
        >B.</button>        
          <p>Upsetting Shea</p>
        </div>
        <div className="multiple">
        <button
                onClick={()=> props.handleClick()}
        
        >C.</button>        
          <p>Big Foot</p>
        </div>
        <div className="multiple">
        <button
                onClick={()=> props.handleClick2()}
        
        >D.</button>        
          <p>Darkness</p>
        </div>
        </div>
    );
};

export default MultipleChoice;
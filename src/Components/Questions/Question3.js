import React, { Component } from 'react';

import MultipleChoice from './MultipleChoice';

class Question3 extends Component {
    constructor(){
        super()

        this.state = {
            answer: false
        }

        this.handleClick = this.handleClick.bind(this)        
        this.handleClick2 = this.handleClick2.bind(this)
    }

    handleClick(){
        window.alert('wrong!')
        this.setState({answer: false})        
    }

    handleClick2(){
        window.alert('I am deathly afraid of the dark.')
        this.setState({answer: true})
    }
    
    render() {
    const {answer} = this.state
    return (
        <div className={answer ? 'question' : 'check'}>
        <h4>Question 3</h4>
        <p>What is Tim's biggest fear?</p>

        <MultipleChoice handleClick={this.handleClick} handleClick2={this.handleClick2}/>

      </div>
    );
  }
}

export default Question3;

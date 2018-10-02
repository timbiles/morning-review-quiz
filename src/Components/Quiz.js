import React, {Component} from 'react';

import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';

import './Quiz.css';

class Quiz extends Component {
    constructor(){
        super()

        this.state = {
            question1: 8,
            question2: 'wood',
            input: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(val){
        this.setState({input: val})
    }

    render(){
        const {question1, question2, input} = this.state
        return (
            <div>
                <h1>Quiz</h1>
                {/* <div>
                    <h4>Score Tracker</h4>
                    <div>
                        <p>Question 1</p>
                        <p>Question 2</p>
                        <p>Question 3</p>
                        <p>Question 4</p>
                    </div>
                </div> */}
                <Question1 answer={question1}/>
                <Question2 answer={question2} handleChange={this.handleChange} input={input}/>
            </div>
        )
    }
}

export default Quiz
import React, {useCallback, useState} from 'react'
import Btn from './button-component'
import Questions from './quiz-question'

const quizQuestions = [{
    id:0,
    text: "eat"
}, {
    id:1,
    text: "sleep"
},
{
    id:2,
    text: "rave"
}, {
    id:3,
    text: "repeat"
}]

const Quiz = ({ title }) => {
    
    const onClickAnswer = useCallback((value) => {
        if(value === 'eat') {
            alert('123')
        }
        else {
            alert('!!!!!!!!!!!!!!')
        }
    })
    
        
    return(
        <div className="quiz">
            <h2>{title}</h2>
            {quizQuestions.map((item) => {
                return (
                    <Questions
                    key = {item.id}
                    text = {item.text}
                    correctAnswer = {onClickAnswer}
                    />
                )
            })}
        </div>
    )
}

export default Quiz
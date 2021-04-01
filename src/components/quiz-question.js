import React, {useCallback, useState} from 'react'


const Questions = ({ text, correctAnswer }) => {   
     
   const onChange = useCallback((event) => {
       correctAnswer(event.target.value)
   }, [correctAnswer])

   return (
       <div>
           <input
           type = 'radio'
           value = {text}
           onChange = {onChange}
           />
           <span>{text}</span>
       </div>
   )
}

export default Questions
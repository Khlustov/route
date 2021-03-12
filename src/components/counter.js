import React, {useState} from 'react'

const Counter = () => {
 
    const [number, setNumber] = useState(0);

    const plus = () => {
        setNumber(number + 1)
    }

    const minus = () => {
        setNumber(number - 1)
    }

   
    return(
        <div>
            <button onClick = {minus}>Minus</button>
            <span className = 'counter'>{number}</span>
            <button onClick = {plus}>Plus</button>
        </div>
    )    
}

export default Counter
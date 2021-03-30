import React, {useCallback, useState} from 'react'
import Task from '../components/task'

const todoItems = [{
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

const CheckList = ({ title }) => {
    
    const [trues, setTrues] = useState(0)

    const onClickTask = useCallback((value) => {
        if(value) {
            setTrues(() => trues + 1)
        }
        else {
            setTrues(() => trues - 1)
        }
    }, [setTrues, trues])
    
    const percent = trues / todoItems.length * 100
    
    return(
        <div className="checklist">
            <h2>{title}</h2>

            <div className="loadbar">
                <div className="progress" style={{width: `${percent}%`}}></div>
            </div>

            {todoItems.map((item) => {
                return (
                <Task 
                key={item.id} 
                text={item.text} 
                onPress = {onClickTask}
                />
                )
            })}
        </div>
    )
}

export default CheckList
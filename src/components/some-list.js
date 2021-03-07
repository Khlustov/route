import React from 'react'
import data from '../data.json'


// Task 1
class SomeList extends React.Component {

render() {
    return(
        <div>{ data.map( (element) => {
            return(
                <div key = {element._id}>
                    <h3> {`${element.name.first}`} </h3>
                    <h4> {`${element.name.last}`} </h4>
                </div>
            )
        })}</div>
    )
}
}

export default SomeList
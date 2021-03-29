import React, {Component} from 'react'

class Btn extends Component {
    render() {
        return <button onClick = {this.props.action}>{this.props.label}</button>
    }
}

export default Btn
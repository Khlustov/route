import React, {Component} from 'react'
import moment from 'moment'

class Clock extends Component {
    state = {
        time: moment()
    }

    changeState = () => {
        this.setState({time: moment()})
    }
    
    componentDidMount = () => {
        setInterval(this.changeState, 1000)
    }

    render() {
        return <h6>{this.state.time.format('LTS')}</h6>
    }


}

export default Clock
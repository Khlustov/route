import React, {Component} from 'react'
import moment from 'moment'

class Clock extends Component {
    
    state = {
        time: moment()
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
      }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }

    tick() {
      this.setState({
        time: moment(),
      });
    }

    render() {
        return <h6>{this.state.time.format('LTS')}</h6>
    }
}

export default Clock
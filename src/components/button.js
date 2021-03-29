import React, {Component} from 'react'
import Btn from './button-component'

class Button extends Component {
    
    state = {
        loading: false,
        greeting: ''
    }

    showLoader = () => {
        
        setTimeout(this.sayHi, 2000);
        this.activeLoader();
    }

    activeLoader = () => {
        this.setState({loading: !this.state.loading})
    }

    sayHi = () => {
        this.setState({loading: false, greeting: 'Hello!'})
    }

    render() {
        return(
        <div>
            <Btn 
            action = {this.showLoader}
            label = 'Say hi'
            />
            {this.state.loading && (<div className = 'loader'></div>)}
            {this.state.greeting !== '' && (<span>{this.state.greeting}</span>)}
        </div>
        )
    }
}

export default Button
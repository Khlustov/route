import Reacr, {Component} from 'react'

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
            <button onClick = {this.showLoader}>Say HI</button>
            {this.state.loading && (<div className = 'loader'></div>)}
            {this.state.greeting !== '' && (<span>{this.state.greeting}</span>)}
        </div>
        )
    }
}

export default Button
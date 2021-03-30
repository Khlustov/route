import React, {Component} from 'react'
import Btn from './button-component'

class Input extends Component {

    state = {
        login: '',
        password: ''
    }

    onChangeLogin = (event) => {
        this.setState({login: event.target.value})
    }

    onChangePassword = (event) => {
        this.setState({password: event.target.value})
    }

    clearInputs = () => {
        this.setState({login: '', password: ''})
    }

    render() {
        return(
            <div>
                <input type = 'text' placeholder = 'login' onChange = {this.onChangeLogin} value = {this.state.login}/>
                <input type = 'password' placeholder = 'password' onChange = {this.onChangePassword} value = {this.state.password}/>
                <Btn 
                action = {this.clearInputs}
                label = 'Clear'
                />
            </div>
        )
    }
}

export default Input
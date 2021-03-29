import React, {Component} from 'react'
import axios from 'axios'

class LoginPage extends Component {
  
    state = {
        phone: '',
        password: '',
        user: null,
        error: ''
    }

    onChangeCredentials = (event, fieldName) => {
        // if(fieldName === 'phone') {
        //     this.setState({phone: event.target.value})
        // }
        // if(fieldName === 'password') {
        //     this.setState({password: event.target.value})
        // }

        this.setState({ [fieldName]: event.target.value, error: '' })
    }

    onLogin = async() => {
        try {
            const responce = await axios.post('http://localhost:3001/auth/sign-in', {
            phone: this.state.phone,
            password: this.state.password
        })
        this.setState({user: responce.data, phone: '', password: ''}) 
        } catch (err) {
            this.setState({error: err.responce.data})
            console.log(err.responce);
        }
    }

    render() {
        return(
            <div>
                <input 
                type = 'text'
                placeholder = 'phone'
                onChange = {(event) => this.onChangeCredentials(event, 'phone')}
                value = {this.state.phone}
                />
                <input 
                type = 'text'
                placeholder = 'password'
                onChange = {(event) => this.onChangeCredentials(event, 'password')}
                value = {this.state.password}
                />
                <button onClick = {this.onLogin}></button>
                {this.state.user ? (
                    <span>{this.state.user.name.first}</span>
                ) : (
                    <span>Error</span>
                )}
                <div>{this.state.error}</div>
            </div>
        )
    }

}

export default LoginPage
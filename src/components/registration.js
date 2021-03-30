import React, {Component} from 'react'
import Btn from './button-component'

class Registration extends Component {
    state = {
        phone: '',
        name: '',
        password: '',
        confirmPassword: '',
        message: '',
        error: ''
    }

    onChangeCredentials = (event, fieldName) => {        
        this.setState({ [fieldName]: event.target.value, error: '' })
    }

    checkData = () => {

        const correctPass = /[0-9a-zA-Z]/g.test(this.state.password);

        if(this.state.phone.length !== 13 || this.state.phone[0] !== '+') {
            this.setState({error: 'Invalid phone number'});
        }
        else if(!this.state.name.length) {
            this.setState({error: 'Enter your name'})
        }
        else if(!correctPass) {
            this.setState({error: 'Password must contain uppercase and lowercase letters and numbers'})
        }
        else if(this.state.password.length < 8) {
            this.setState({error: 'Too short password'})
        }
        else if(this.state.password !== this.state.confirmPassword) {
            this.setState({error: 'The passwords entered must match'})
        }
        else {
            this.setState({
                message: 'Registration completed successfully',
                phone: '',
                name: '',
                password: '',
                confirmPassword: '',
            });
            console.log(this.state);
        }

        
    }

    render() {
        return(
            <div className = 'registration'>
                <input 
                className = 'reg-input'
                type = 'text'
                placeholder = 'Enter your phone number'
                onChange = {(event) => this.onChangeCredentials(event, 'phone')}
                value = {this.state.phone}
                />
                <input 
                className = 'reg-input reg-input__name'
                type = 'text'
                placeholder = 'Enter your name'
                onChange = {(event) => this.onChangeCredentials(event, 'name')}
                value = {this.state.name}
                />
                <input 
                className = 'reg-input reg-input__password'
                type = 'password'
                placeholder = 'Enter your password'
                onChange = {(event) => this.onChangeCredentials(event, 'password')}
                value = {this.state.password}
                />
                <input 
                className = 'reg-input reg-input__confirmpassword'
                type = 'password'
                placeholder = 'Confirm your password'
                onChange = {(event) => this.onChangeCredentials(event, 'confirmPassword')}
                value = {this.state.confirmPassword}
                />
                <Btn 
                action = {this.checkData}
                label = 'Sign In'
                />
                <p>{this.state.error}</p>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Registration
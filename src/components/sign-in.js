import React, {Component} from 'react'

class SignIn extends Component {

    state = {
        isSignedIn: false
    }

    changeElement = () => {
        this.setState({isSignedIn: !this.state.isSignedIn})
    }

    timer = () => {
        setTimeout(this.changeElement, 2000)
    }

    render() {
        return(
            <div onClick = {this.timer}>
                {this.state.isSignedIn ? 'Hello user' : <button>Sign In</button>}
            </div>
        )
    }
}

export default SignIn
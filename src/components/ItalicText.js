import React, {Component} from 'react'

class Text extends Component {
  
    state = {
      italic: false
    }
  
    changeStyle = () => this.setState({italic: !this.state.italic})
  
    render() {
      return(
        <p  onClick = {this.changeStyle} className = {this.state.italic ? 'text' : ''}> {this.props.text} </p>
      )
    }
  }

export default Text  
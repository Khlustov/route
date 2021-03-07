import React, {Component} from 'react'


class Square extends Component {

    render() {
      return(
        <div className = {this.props.cssClass}>
           {this.props.text}
        </div>
      )
    }
  }

export default Square
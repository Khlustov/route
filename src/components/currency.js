import React, {Component} from 'react'
import axios from 'axios'

class Currency extends Component {

    state = {
        all: [],
        dollar: '',
        euro: '',
        rub: ''
    }

    componentDidMount() {
        axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0').then(
            responce => {this.setState({all: responce.data})}
        ).catch(error => console.log(error));

    }

    

    render() {
        return(
            <div className = 'currency'>
                {this.state.all.map((item) => {
                    if(item.Cur_ID === 145) {
                        return (
                        <div className = 'single-currency' key = {item.Cur_ID}>    
                        <p>{item.Cur_Abbreviation}</p>
                        <p>{item.Cur_OfficialRate}</p>
                        </div>
                        )
                    }
                    if(item.Cur_ID === 292) {
                        return (
                        <div className = 'single-currency' key = {item.Cur_ID}>    
                        <p>{item.Cur_Abbreviation}</p>
                        <p>{item.Cur_OfficialRate}</p>
                        </div>
                        )
                    }
                    if(item.Cur_ID === 298) {
                        return (
                        <div className = 'single-currency' key = {item.Cur_ID}>    
                        <p>{item.Cur_Abbreviation}</p>
                        <p>{item.Cur_OfficialRate}</p>
                        </div>
                        )
                    }
                })}
                
            </div>
        )
    }
}


export default Currency
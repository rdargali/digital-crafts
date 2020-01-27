import React,{ Component} from "react";
import "./Counter.css"

class Counter extends Component {

    constructor(props){

        super(props)
        this.state = {
            counter: 0
        }
    }

    counterDecrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    counterIncrement = () => {
        this.setState({
            counter: this.state.counter +1
        })
    }

  

    render(){

        return <>
        <button className = "counterButton" onClick={this.counterDecrement}>-</button>
        <h1>{this.state.counter}</h1>
        <button className = "counterButton"  onClick={this.counterIncrement}>+</button>
        </>
    }
}

export default Counter
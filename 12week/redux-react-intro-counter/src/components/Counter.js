import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
    return (
        <div>
            <h1>Counter</h1>
            <h3>{props.ctr}</h3>
            <button onClick = {() => props.onIncrement()}>Increment</button>
            <button onClick = {() => props.onDecrement()}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT_COUNTER'}),
        onDecrement: () => dispatch({type: 'DECREMENT_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter) 
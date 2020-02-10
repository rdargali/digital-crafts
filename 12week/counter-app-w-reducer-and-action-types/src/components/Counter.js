import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      <h1>Counter</h1>
      <h3>{props.count}</h3>
      <button onClick={() => props.increment()}>Add by 1</button>
      <button onClick={() => props.decrement()}>Subtract 1</button>
      <button onClick={() => props.double()}>Double</button>
      <button onClick={() => props.half()}>Half</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counterReducer.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT_COUNTER" }),
    decrement: () => dispatch({ type: "DECREMENT_COUNTER" }),
    double: () => dispatch({ type: "DOUBLE_COUNTER" }),
    half: () => dispatch({ type: "HALF_COUNTER" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

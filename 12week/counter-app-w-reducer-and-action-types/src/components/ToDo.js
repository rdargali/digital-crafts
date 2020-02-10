import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

const ToDo = props => {
  const [ToDo, setToDo] = useState("");

  const handleChange = e => {
    setToDo(e.target.value);
  };

  return (
    <div>
      <h1>To Do List</h1>

      <input onChange={handleChange} type="text" />
      <button onClick={() => props.addToDo(ToDo)}>Add to list</button>
    </div>
  );
};

// const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    addToDo: ToDo => dispatch({ type: "ADD_TO_DO", payload: ToDo })
  };
};

export default connect(null, mapDispatchToProps)(ToDo);

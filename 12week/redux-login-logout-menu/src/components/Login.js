import React from "react";
import { connect } from "react-redux";

function Login(props) {
  return (
    <div>
      <button onClick={() => props.handleLogin()}>Login</button>
      <button onClick={() => props.handleLogout()}>Logout</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: () => dispatch({ type: "LOG_IN" }),
    handleLogout: () => dispatch({ type: "LOG_OUT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

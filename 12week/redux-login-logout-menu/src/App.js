import React from 'react';

import Login from './components/Login';
import LoggedInMenu from './components/LoggedInMenu';
import LoggedOutMenu from './components/LoggedOutMenu';

import { connect } from "react-redux"

function App(props) {

  const isAuth = props.isAuthenticated

  if (isAuth) {
    return (
      <div>
        <LoggedInMenu />
        <Login />
      </div>
    )
  } else {
    return (
      <div>
        <LoggedOutMenu />
        <Login />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(App)

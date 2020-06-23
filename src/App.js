import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from './store/actions';
import ProtectedRoute from './components/ProtectedRoute';
import ApiExample from './ApiExample'
import Login from './views/Login.js'
import Logout from './views/Logout.js'
import Events from './views/Events.js'

import './App.css'

function App({ setUser }) {
  return (
    <Router className="App">
      <Switch>
        <Route path="/events/:id">
          <ApiExample />
        </Route>
        <ProtectedRoute path="/events">
          <Events />
        </ProtectedRoute>
        <Route path="/api">
          <ApiExample />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser(user) {
      dispatch(setUser(user));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

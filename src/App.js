import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from './store/actions';
import ProtectedRoute from './components/ProtectedRoute';
import Event from './views/Event';
import Request from './views/Request';
import Login from './views/Login'
import Logout from './views/Logout'
import Events from './views/Events'
import Users from './views/Users';
import User from './views/User';

import './App.css'

function App({ setUser }) {
  return (
    <Router className="App">
      <Switch>
        <Route path="/events/:id">
          <Event />
        </Route>
        <ProtectedRoute roles={['dispatcher', 'driver', 'family']} path="/events">
          <Events />
        </ProtectedRoute>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/request">
          <Request />
        </Route>
        <ProtectedRoute roles={['dispatcher']} path="/users/:id">
          <User />
        </ProtectedRoute>
        <ProtectedRoute roles={['dispatcher']} path="/users">
          <Users />
        </ProtectedRoute>
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

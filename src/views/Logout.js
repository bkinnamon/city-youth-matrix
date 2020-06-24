import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setUser } from '../store/actions';
import API from '../helpers/api';

function Logout({ setUser }) {
  API.logout();
  setUser(null);

  return (
    <Redirect to="/" />
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setUser(user) {
      dispatch(setUser(user));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

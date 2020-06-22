import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ children, user, ...rest }) {
  if (!user.id) {
    return (
      <Route {...rest}>
        <Redirect to="/" />
      </Route>
    );
  }

  return (
    <Route {...rest}>
      {children}
    </Route>
  );
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(PrivateRoute);

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ children, user, roles, ...rest }) {
  const userHasRole = roles.reduce((hasRole, role) => {
    if (hasRole) return true;
    return !!user?.types?.includes(role);
  });

  if (!user?.id || !userHasRole) {
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

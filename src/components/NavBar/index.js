import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './NavBar.module.css';

function AppBar({ user }) {
  const showUsersNavLink = user?.types?.includes('dispatcher');

  return (
    <nav className={styles.nav}>
      <NavLink activeClassName={styles.active} className={styles.link} to="/events">Events</NavLink>
      {showUsersNavLink && <NavLink activeClassName={styles.active} className={styles.link} to="/users">Users</NavLink>}
      <NavLink activeClassName={styles.active} className={styles.link} to="/logout">Logout</NavLink>
    </nav>
  );
}

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserTile.module.css';

function UserTile({ user }) {
  return (
    <Link className={styles.tile} to={`/users/${user.id}`}>
      {user.name} ({user.username})
    </Link>
  );
}

export default UserTile;

import React from 'react';
import { useApi } from '../hooks/useApi';
import headerLogo from '../CYM_logo_v2.svg'
import NavBar from '../components/NavBar';

function Users() {
  const data = useApi('GET', '/users');

  console.log(data);

  const usersBlock = data?.users ?
    data.users.map(user => <p key={user.username}>Username: {user.username}</p>) :
    <p>Loading users ...</p>;

  return (
    <div className="event-page" >
      <div>
        <img src={headerLogo} alt="City Youth Matrix logo" className="header-logo" />
      </div>

      <NavBar />

      <div className="event-list">
        <h2>Users</h2>
        <div>
          {usersBlock}
        </div>
      </div>
    </div>
  );
}

export default Users;

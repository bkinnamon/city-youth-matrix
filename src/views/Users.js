import React, { useState, useEffect } from 'react';
import API from '../helpers/api';
import headerLogo from '../CYM_logo_v2.svg'
import NavBar from '../components/NavBar';
import UserTile from '../components/UserTile';

function Users() {
  const [error, setError] = useState();
  const [pending, setPending] = useState([]);
  const [families, setFamilies] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [dispatchers, setDispatchers] = useState([]);

  useEffect(() => {
    API.callApi('GET', '/users').then(data => {
      if (data.error) {
        setError(data.error);
        return;
      } else {
        setPending(data.users.reduce((list, user) => {
          if (!user.types) list.push(user);
          else if (user.types.length === 0) list.push(user);
          return list;
        }, []));

        setFamilies(data.users.reduce((list, user) => {
          if (user.types && user.types.includes('family')) list.push(user);
          return list;
        }, []));

        setDrivers(data.users.reduce((list, user) => {
          if (user.types && user.types.includes('driver')) list.push(user);
          return list;
        }, []));

        setDispatchers(data.users.reduce((list, user) => {
          if (user.types && user.types.includes('dispatcher')) list.push(user);
          return list;
        }, []));
      }
    });
  }, []);

  if (error) {
    return (
      <div className="event-page" >
        <div>
          <img src={headerLogo} alt="City Youth Matrix logo" className="header-logo" />
        </div>

        <NavBar />

        <p>{error}</p>

        <div className="event-list">
          <h2>Users</h2>
          <div>
            <p>Loading users ...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="event-page" >
      <div>
        <img src={headerLogo} alt="City Youth Matrix logo" className="header-logo" />
      </div>

      <NavBar />

      <div className="event-list">
        <h2>Users</h2>
        <div style={{padding: '0 1rem'}}>
          <h3>Pending</h3>
          {pending.map(user => <UserTile key={user.id} user={user} />)}
          <h3>Families</h3>
          {families.map(user => <UserTile key={user.id} user={user} />)}
          <h3>Drivers</h3>
          {drivers.map(user => <UserTile key={user.id} user={user} />)}
          <h3>Dispatchers</h3>
          {dispatchers.map(user => <UserTile key={user.id} user={user} />)}
        </div>
      </div>
    </div>
  );
}

export default Users;

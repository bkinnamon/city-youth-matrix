import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../helpers/api';
import logo from '../CYM_logo_v1.svg'

function Request() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function doRegister() {
    const data = await API.register(username, password);
    if (data.error) console.log(data.error);
    else return <Redirect to="/events" />;
  }

  return (
    <div>
      <div className="img-container">
        <img src={logo} alt="City Youth Matrix logo" className="main-logo"/>
      </div>

      <form onSubmit={doRegister} className="login-form" >
        <div className="container">
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/>
          </div>

          <div>
            <button type="submit" className="log-in-button">Request Account</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Request;

import React, {useState} from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { setUser } from '../store/actions';
import API from '../helpers/api';
import logo from '../CYM_logo_v1.svg'
import '../App.css'

function Login({user, setUser}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Check if we're already logged in with a token
  API.tokenLogin().then(data => {
    if (data?.user) {
      setUser(data.user);
    }
  });
  
  if (user?.id) {
    return <Redirect to="/events" />;
  }

  async function doLogin(e) {
    e.preventDefault();
    const data = await API.login(username, password);
    setUser(data.user);
  }

  return (
    <div>
      <div className="img-container">
        <img src={logo} alt="City Youth Matrix logo" className="main-logo"/>
      </div>

      <form onSubmit={doLogin} className="login-form" >
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
            <button type="submit" className="log-in-button">Log In</button>
          </div>
        </div>
      </form>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

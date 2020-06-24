import React from 'react';
import headerLogo from '../../CYM_logo_v2.svg'
import NavBar from '../NavBar';

function Layout({ children, error }) {
  return (
      <div className="event-page" >
        <div>
          <img src={headerLogo} alt="City Youth Matrix logo" className="header-logo" />
        </div>

        <NavBar />

        {error && <p>ERROR: {error}</p>}

        <div className="event-list" style={{ padding: '1rem 2rem' }}>
          {children}
        </div>
      </div>
  );
}

export default Layout;

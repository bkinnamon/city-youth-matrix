import React from 'react'

import { useApi } from './hooks/useApi';

import logo from './CYM_logo_v1.svg'
import './App.css'
import Login from './views/Login.js'
import Events from './views/Events.js'

function App() {
  const [result, loading] = useApi('/echo', 'POST', {hello: "World!"});

  return (
    <div className="App">
      {/*<img src={logo} className="main-logo" alt="City Youth Matrix logo" />
      {loading && <pre>Hello {result?.hello}</pre>}*/}
  		{/*<Login />*/}
  		<Events />
    </div>
  )
}

export default App

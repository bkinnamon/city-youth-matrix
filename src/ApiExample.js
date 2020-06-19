import React, { useState } from 'react';
import { useApi } from './hooks/useApi';
import API from './helpers/api';

function ApiExample() {
  const [events, setEvents] = useState([]);
  const echo = useApi('POST', '/echo', {hello: "World!"});

  async function loadEvents() {
    const results = await API.allEvents();
    setEvents(results.events);
  }

  return (
    <>
      {echo && <pre>Hello {echo.hello}</pre>}
      <p>
        <button onClick={loadEvents}>Load Events</button>
      </p>
      {events.map(e => <p key={e.id}>{e.name}</p>)}
    </>
  )
}

export default ApiExample;

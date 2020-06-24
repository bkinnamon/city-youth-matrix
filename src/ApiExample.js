import React, { useState } from 'react';
import { useApi } from './hooks/useApi';
import API from './helpers/api';

import { useParams } from 'react-router-dom';

function ApiExample() {
  const [events, setEvents] = useState([]);
  const { id } = useParams();

  const echo = useApi('POST', '/echo', {hello: "World!"});

  async function loadEvents() {
    const results = await API.allEvents();
    setEvents(results.events);
  }

  const event = useApi('GET', '/events/' + id);

  return (
    <>
      {echo && <pre>Hello {echo.hello}</pre>}
      <p>
        <button onClick={loadEvents}>Load Events</button>
      </p>
      {events.map(e => <p key={e.id}>{e.name}</p>)}
      <p>The ID is {id}</p>
      {event && <p>Event name: {event.event.name}</p>}
    </>
  )
}

export default ApiExample;

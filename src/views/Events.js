import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import API from '../helpers/api';
import Layout from '../components/Layout';
import Card from './Card';

function Events () {
  const [error, setError] = useState();
  const [events, setEvents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    API.allEvents().then(data => {
      if (data.error) {
        setError(data.error);
        return;
      }
      setEvents(data.events);
    })
  }, []);

  function newEvent() {
    history.push("/events/new");
  }

  return (
    <Layout error={error}>
      <button className="log-in-button" onClick={newEvent}>Create New Event</button>
      <h2>Upcoming Events</h2>
      <div>
        {events.map(event =>
        <Link key={event.id} className="event-link" to={`/events/${event.id}`}>
          <Card
            name={event.name}
            date={event.date}
            start={event.start}
            partner={event.partner}
            end={event.end}
          />
        </Link>
        )}
      </div>
    </Layout>
  )
}

export default Events

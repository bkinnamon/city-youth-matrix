import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../helpers/api';
import Layout from '../components/Layout';
import EventEditor from '../components/EventEditor';

function NewEvent() {
  const [error, setError] = useState();
  const history = useHistory();

  async function createEvent(eventData) {
    const data = await API.createEvent({...eventData, registrations: []});
    if (data.error) {
      setError(data.error);
      return;
    }
    history.push(`/events/${data.event.id}`);
  }

  return (
    <Layout error={error}>
      <EventEditor onSubmit={createEvent}/>
    </Layout>
  );
}

export default NewEvent;

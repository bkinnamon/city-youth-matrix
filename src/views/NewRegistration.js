import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../helpers/api';
import Layout from '../components/Layout';
import RegEditor from '../components/RegEditor';

function NewRegistration({ event }) {
  const [error, setError] = useState();
  const history = useHistory();

  async function updateEvent(newReg) {
    const newRegList = [ ...event.registrations, newReg ];
    const data = await API.callApi('PATCH', `/events/${event.id}`, {registrations: newRegList});
    if (data.error) {
      setError(data.error);
      return;
    }
    history.push(`/events/${data.event.id}`);
  }

  return (
    <Layout error={error}>
      <RegEditor onSubmit={updateEvent}/>
    </Layout>
  );
}

export default NewRegistration;

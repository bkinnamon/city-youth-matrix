import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import API from '../helpers/api';
import Layout from '../components/Layout';
import RegEditor from '../components/RegEditor';

function NewRegistration() {
  const [error, setError] = useState();
  const [event, setEvent] = useState();
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    API.event(id).then(data => {
      if (data.error) {
        setError(data.error);
        return;
      }
      setEvent(data.event);
    });
  }, [id]);

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

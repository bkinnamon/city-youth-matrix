import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { setUser } from '../store/actions';
import API from '../helpers/api';
import Layout from '../components/Layout';
import EventEditor from '../components/EventEditor';

function Event({ user }) {
  const [error, setError] = useState();
  const [event, setEvent] = useState();
  const [editing, setEditing] = useState(false);

  const history = useHistory();
  const { id } = useParams();

  async function updateEvent(eventData) {
    const data = await API.callApi('PUT', `/events/${id}`, eventData);
    if (data.error) {
      setError(data.error);
      return;
    }
    setEvent(data.event);
    setEditing(false);
  }

  async function deleteEvent() {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await API.deleteEvent(id);
      history.push("/events");
    }
  }

  useEffect(() => {
    API.event(id).then(data => {
      if (data.error) {
        setError(data.error);
        return;
      }
      setEvent(data.event);
    });
  }, [id]);

  if (user?.types?.includes('dispatcher') && editing) {
    return (
      <Layout>
        <EventEditor event={event} onSubmit={updateEvent} />
        <button type="button" className="btn--text full-width" onClick={() => setEditing(false)}>Cancel</button>
      </Layout>
    );
  }

  return (
    <Layout error={error}>
      <h2>{event?.name}</h2>
      {user?.types?.includes('dispatcher') &&
      <>
        <button className="btn--text" onClick={() => setEditing(true)}>Edit</button>
        <button className="btn--text" onClick={deleteEvent}>Delete</button>
      </>}
      <p>{event?.partner}</p>
      <p>
        <strong>{event?.date} </strong>
        From
        <strong> {event?.start} </strong>
        to
        <strong> {event?.end} </strong>
      </p>
      <p>{event?.description}</p>
      <h3>Registrations</h3>
      {event?.registrations?.length > 0 && event.registrations.map(reg => (<h4>reg.family</h4>))}
      {event?.registrations?.length === 0 && <p>There are no registrations.</p>}
      {user?.types?.includes('dispatcher') &&
        <button className="log-in-button" onClick={() => history.push("/events/new-reg")}>Add Registration</button>}
    </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Event);

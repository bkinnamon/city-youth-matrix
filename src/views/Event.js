import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUser } from '../store/actions';
import API from '../helpers/api';
import useForm from '../hooks/useForm';
import Layout from '../components/Layout';

function Event({ user }) {
  const [error, setError] = useState();
  const [event, setEvent] = useState();
  const [editing, setEditing] = useState(false);

  const { id } = useParams();

  const { handleSubmit, handleChange, formData, setFormData } = useForm(updateEvent);

  async function updateEvent() {
    const data = await API.callApi('PUT', `/events/${id}`, formData);
    if (data.error) {
      setError(data.error);
      return;
    }
    setEvent(data.event);
    setFormData(data.event);
    setEditing(false);
  }

  useEffect(() => {
    API.event(id).then(data => {
      if (data.error) {
        setError(data.error);
        return;
      }
      setEvent(data.event);
      setFormData(data.event);
    });
  }, [id, setFormData]);

  if (user?.types?.includes('dispatcher') && editing) {
    return (
      <Layout>
        <form onSubmit={handleSubmit}>
          <label>
            <div>Name</div>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            <div>Partner</div>
            <input type="text" name="partner" value={formData.partner} onChange={handleChange} />
          </label>
          <label>
            <div>Date</div>
            <input type="text" name="date" value={formData.date} onChange={handleChange} />
          </label>
          <div style={{display: 'flex'}}>
            <label style={{flex: 1}}>
              <div>Start</div>
              <input type="text" name="start" value={formData.start} onChange={handleChange} />
            </label>
            <label style={{flex: 1}}>
              <div>End</div>
              <input type="text" name="start" value={formData.end} onChange={handleChange} />
            </label>
          </div>
          <label>
            <div>Description</div>
            <textarea className="textarea" name="description" value={formData.description} onChange={handleChange}></textarea>
          </label>
          <button type="submit" className="log-in-button">Save Event</button>
          <button type="button" className="btn--text full-width" onClick={() => setEditing(false)}>Cancel</button>
        </form>
      </Layout>
    );
  }

  return (
    <Layout error={error}>
      <h2>{event?.name}</h2>
      {user?.types?.includes('dispatcher') &&
      <button className="btn--text" onClick={() => setEditing(true)}>Edit</button>}
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
        <button className="log-in-button">Add Registration</button>}
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

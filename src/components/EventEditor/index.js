import React from 'react';
import useForm from '../../hooks/useForm';

function EventEditor({ event, onSubmit }) {
  const { handleSubmit, handleChange, formData, setFormData } = useForm(() => onSubmit(formData));

  if (event) setFormData(event);

  const title = event ? `Edit ${event.name}` : 'New Event';
  return (
    <>
      <h2>{title}</h2>
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
            <input type="text" name="end" value={formData.end} onChange={handleChange} />
          </label>
        </div>
        <label>
          <div>Description</div>
          <textarea className="textarea" name="description" value={formData.description} onChange={handleChange}></textarea>
        </label>
        <button type="submit" className="log-in-button">Save Event</button>
      </form>
    </>
  );
}

export default EventEditor;

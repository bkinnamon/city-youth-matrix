import React from 'react';
import useForm from '../../hooks/useForm';

function EventEditor({ registration, onSubmit }) {
  const { handleSubmit, handleChange, formData, setFormData } = useForm(() => onSubmit(formData));

  if (registration) setFormData(registration);

  function addChild() {
    const children = formData.children || [];
    setFormData({
      ...formData,
      children: [ ...children, { name: '', age: '' }],
    });
  }

  function remChild(index) {
    const children = formData.children || [];
    setFormData({
      ...formData,
      children: [ ...children.slice(0, index), ...children.slice(index + 1) ],
    });
  }

  const title = registration ? 'Edit Registration' : 'New Registration';
  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <div>Family</div>
          <input type="text" name="family" value={formData.family} onChange={handleChange} />
        </label>
        <div>
          <div>Children</div>
          <button type="button" class="btn--text" onClick={addChild}>Add</button>
          {formData.children?.map((child, index) => (
            <div style={{padding: '1rem'}}>
              <label>
                <div>Name</div>
                <input type="text" name={`children[${index}].name`} value={child.name} onChange={handleChange} />
              </label>
              <label>
                <div>Age</div>
                <input type="text" name={`children[${index}].age`} value={child.age} onChange={handleChange} />
              </label>
              <button type="button" class="btn--text" onClick={() => remChild(index)}>Remove</button>
            </div>
          ))}
        </div>
        <h3>Pick-up Trip</h3>

        <h3>Return Trip</h3>

        <button type="submit" className="log-in-button">Save Registration</button>
      </form>
    </>
  );
}

export default EventEditor;

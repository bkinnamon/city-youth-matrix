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

  function updateChild(event) {
    const index = event.target.dataset.index;
    const child = formData.children[index];
    const newChild = { ...child, [event.target.name]: event.target.value };
    setFormData({
      ...formData,
      children: [
        ...formData.children.slice(0, index),
        newChild,
        ...formData.children.slice(index + 1)
      ],
    });
  }

  function addAdult() {
    const adults = formData.adults || [];
    setFormData({
      ...formData,
      adults: [ ...adults, { name: '', age: '' }],
    });
  }

  function remAdult(index) {
    const adults = formData.adults || [];
    setFormData({
      ...formData,
      adults: [ ...adults.slice(0, index), ...adults.slice(index + 1) ],
    });
  }

  function updateAdult(event) {
    const index = event.target.dataset.index;
    const adult = formData.adults[index];
    const newAdult = { ...adult, [event.target.name]: event.target.value };
    setFormData({
      ...formData,
      adults: [
        ...formData.adults.slice(0, index),
        newAdult,
        ...formData.adults.slice(index + 1)
      ],
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
          <div>Adults</div>
          <button type="button" className="btn--text" onClick={addAdult}>Add</button>
          {formData.adults?.map((adult, index) => (
            <div key={index} style={{padding: '1rem'}}>
              <label>
                <div>Name</div>
                <input
                  type="text"
                  name="name"
                  data-index={index}
                  value={adult.name}
                  onChange={updateAdult}
                />
              </label>
              <button
                type="button"
                className="btn--text"
                onClick={() => remAdult(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div>
          <div>Children</div>
          <button type="button" className="btn--text" onClick={addChild}>Add</button>
          {formData.children?.map((child, index) => (
            <div key={index} style={{padding: '1rem'}}>
              <label>
                <div>Name</div>
                <input
                  type="text"
                  name="name"
                  data-index={index}
                  value={child.name}
                  onChange={updateChild}
                />
              </label>
              <label>
                <div>Age</div>
                <input
                  type="text"
                  name="age"
                  data-index={index}
                  value={child.age}
                  onChange={updateChild}
                />
              </label>
              <button
                type="button"
                className="btn--text"
                onClick={() => remChild(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <label>
          <div>Notes</div>
          <textarea className="textarea" name="notes" value={formData.notes} onChange={handleChange}></textarea>
        </label>
        <h3>Pick-up Trip</h3>
        <label>
          <div>Driver</div>
          <input
            type="text"
            name="pickupDriver"
            value={formData.pickupDriver}
            onChange={handleChange}
          />
        </label>
        <label>
          <div>Address</div>
          <input
            type="text"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
          />
        </label>
        <h3>Return Trip</h3>
        <label>
          <div>Driver</div>
          <input
            type="text"
            name="returnDriver"
            value={formData.returnDriver}
            onChange={handleChange}
          />
        </label>
        <label>
          <div>Address</div>
          <input
            type="text"
            name="returnAddress"
            value={formData.returnAddress}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="log-in-button">Save Registration</button>
      </form>
    </>
  );
}

export default EventEditor;

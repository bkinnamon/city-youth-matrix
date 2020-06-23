import { useState } from 'react'

function useForm(callback) {
  const [formData, setFormData] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    callback();
  }

  function handleChange(event) {
    event.persist();
    if (event.target.type === 'checkbox') {
      const name = event.target.name
      const set = new Set(formData[name]);
      const checked = event.target.checked;
      const value = event.target.value;
      if (checked) set.add(value);
      else set.delete(value);
      setFormData(formData => ({ ...formData, [name]: Array.from(set) }));
    } else {
      setFormData(formData => ({ ...formData, [event.target.name]: event.target.value }));
    }
  }

  return {
    handleChange,
    handleSubmit,
    formData,
    setFormData,
  }
}

export default useForm;

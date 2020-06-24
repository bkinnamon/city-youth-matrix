import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import API from '../helpers/api';
import useForm from '../hooks/useForm';
import Layout from '../components/Layout';

function User() {
  const [error, setError] = useState();
  const [user, setUser] = useState();
  const {id} = useParams();
  const { handleSubmit, handleChange, formData, setFormData } = useForm(updateUser);
  const history = useHistory();

  async function updateUser() {
    await API.callApi('PUT', `/users/${id}`, formData);
    history.push('/users');
  }

  useEffect(() => {
    API.callApi('GET', `/users/${id}`).then(data => {
      if (data.error){
        setError(data.error);
        return;
      }
      setUser(data.user);
      setFormData(data.user);
    });
  }, [id, setFormData]);

  if (!user) {
    return (
      <Layout>
        <p>Loading</p>
      </Layout>
    );
  }

  return (
    <Layout error={error}>
      <h2 style={{marginBottom: '1rem'}}>{user.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <div>Name</div>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <div>
          <div>Roles</div>
          <p>User Roles: {user.types?.join(', ')}</p>
          <p>Form Roles: {formData.types?.join(', ')}</p>
          <label>
            <div>
              <input
                type="checkbox"
                name="types"
                value="dispatcher"
                checked={!!formData.types?.includes('dispatcher')}
                onChange={handleChange}
              />
              Dispatcher
            </div>
          </label>
          <label>
            <div>
              <input
                type="checkbox"
                name="types"
                value="driver"
                checked={!!formData.types?.includes('driver')}
                onChange={handleChange}
              />
              Driver
            </div>
          </label>
          <label>
            <div>
              <input
                type="checkbox"
                name="types"
                value="family"
                checked={!!formData.types?.includes('family')}
                onChange={handleChange}
              />
              Family
            </div>
          </label>
        </div>
        <label>
          <div>Address 1</div>
          <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
        </label>
        <label>
          <div>Address 2</div>
          <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
        </label>
        <div style={{display: 'flex'}}>
          <label style={{flex: 3}}>
            <div>City</div>
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </label>
          <label style={{flex: 1}}>
            <div>State</div>
            <input type="text" name="state" value={formData.state} onChange={handleChange} />
          </label>
          <label style={{flex: 1}}>
            <div>Zip</div>
            <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
          </label>
        </div>
        <label>
          <div>Phone</div>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <button type="submit" className="log-in-button">Save</button>
      </form>
    </Layout>
  );
}

export default User;

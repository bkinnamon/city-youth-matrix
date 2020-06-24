const API_URL = 'https://cym.brettk.dev';

let token = window.localStorage?.getItem('token') || null;

/**
 * Gets the headers for the API call.
 * @returns {object]
 */
function getHeaders() {
  const headers = {};
  headers['Accept'] = 'application/json';
  headers['Authorization'] = `Bearer ${token}`;
  headers['Content-Type'] = 'application/json';

  return headers;
}

/**
 * Call the API with the provided method and body
 * @param {string} method
 * @param {string} path
 * @param {object} body
 * @return {object} The data from the API.
 */
async function callApi(method, path, body) {
  const fetchOptions = {};
  fetchOptions.method = method;
  fetchOptions.headers = getHeaders();
  if (body) fetchOptions.body = typeof body === "string" ? body : JSON.stringify(body);

  const response = await fetch(API_URL + path, fetchOptions);
  const data = await response.json();

  return data;
}

/**
 * Send a login request and store the token.
 * @param {string} username
 * @param {string} password
 * @return {object} An object with the user or error data.
 */
async function login (username, password) {
  const data = await callApi('POST', '/login', {username, password});
  if (data.error) return data;
  token = data.token;
  delete data.token;
  if (!window.localStorage) return data;
  window.localStorage.setItem('token', token);
  return data;
}

/**
 * Sends a login request with a stored token if one is found.
 * @return {object} The results from the API.
 */
async function tokenLogin() {
  token = window.localStorage?.getItem('token') || null
  if (!token) return null;
  const data = await callApi('GET', '/token');
  return data;
}

/**
 * Removes the auth token from storage.
 */
function logout() {
  token = null;
  if (!window.localStorage) return;
  window.localStorage.setItem('token', token);
}

/**
 * Requests a new user acount.
 * @param {string} username
 * @param {string} password
 * @returns {object} The API response.
 **/
async function register(username, password) {
  const data = await callApi('POST', '/register', {username, password});
  if (data.error) return data;
  token = data.token;
  delete data.token;
  if (!window.localStorage) return data;
  window.localStorage.setItem('token', token);
  return data;
}

/**
 * Retrieves all of the events.
 * @return {object} The object containing the request results.
 */
async function allEvents () {
  const data = await callApi('GET', '/events');
  return data;
}

/**
 * Retrieves a specific event.
 * @param {string} id
 * @return {object} The object containing the request results.
 */
async function event(id) {
  const data = await callApi('GET', `/events/${id}`);
  return data;
}

/**
 * Creates a new event.
 * @param {object} event
 * @return {object} The object containing the request results.
 */
async function createEvent(event) {
  const data = await callApi('POST', '/events', event);
  return data;
}

/**
 * Updates an existing event.
 * @param {object} id
 * @param {object} event
 * @return {object} The object containing the request results.
 */
async function updateEvent(id, event) {
  const data = await callApi('PUT', `/events/${id}`, event);
  return data;
}

/**
 * Deletes an event.
 * @param {string} id
 * @return {object} The object containing the request results.
 */
async function deleteEvent(id) {
  const data = await callApi('DELETE', `/events/${id}`);
  return data;
}

const API = {
  callApi,
  login,
  tokenLogin,
  register,
  logout,
  allEvents,
  event,
  createEvent,
  updateEvent,
  deleteEvent,
}

export default API;

import { createStore } from 'redux'
import cymApp from './reducers';

const store = createStore(
  cymApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

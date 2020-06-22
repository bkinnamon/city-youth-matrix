import { combineReducers } from 'redux';
import { SET_USER } from './actions';

function user(state = {}, action) {
  switch(action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}

const cymApp = combineReducers({
  user,
});

export default cymApp;

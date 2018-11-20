
import authReducer from './authReducer';
import eventReducer from '../event_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer
})

export default rootReducer;
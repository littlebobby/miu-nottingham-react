import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import eventReducer from './event_reducer';
import userReducer from './user_reducer'

// TODO: is authenticated
const rootReducer = combineReducers({
  form: formReducer,
  eventList: eventReducer,
  user: userReducer
});

export default rootReducer;

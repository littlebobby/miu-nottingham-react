import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import testReducer from './test_reducer'
import eventReducer from './event_reducer';
import userReducer from './user_reducer'


const rootReducer = combineReducers({
  form: formReducer,
  count: testReducer,
  eventList: eventReducer,
  user: userReducer
});

export default rootReducer;

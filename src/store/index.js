import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import testReducer from './test_reducer'
import eventReducer from './event_reducer';


const rootReducer = combineReducers({
  form: formReducer,
  count: testReducer,
  eventList: eventReducer,
});

export default rootReducer;

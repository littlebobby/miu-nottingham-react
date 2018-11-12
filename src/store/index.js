import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import testReducer from './test_reducer'


const rootReducer = combineReducers({
  form: formReducer,
  count: testReducer,
});

export default rootReducer;

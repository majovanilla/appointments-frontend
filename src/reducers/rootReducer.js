import { combineReducers } from 'redux';
import authReducer from './authReducer';
import apptReducer from './apptReducer';
import tutorsReducer from './tutorsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  appt: apptReducer,
  tutors: tutorsReducer,
});

export default rootReducer;

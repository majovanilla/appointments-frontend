import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tutorsReducer from './tutorsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // tutors: tutorsReducer,
});

export default rootReducer;

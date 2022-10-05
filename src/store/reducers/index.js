import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import taskReducer from './taskReducer';
import eventReducer from './eventReducer';
// import bookReducer from './bookReducer';

const reducers = combineReducers({
  taskReducer,
  eventReducer,
  loginReducer,
  // bookReducer
})

export default reducers;

import { combineReducers } from 'redux';
import login from './auth';

const rootReducer = combineReducers({ login });

export default rootReducer;
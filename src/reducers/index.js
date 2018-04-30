import {combineReducers} from 'redux';
import fetchData from './fetchData';

const rootReducers = combineReducers({
  data: fetchData
})
export default rootReducers;

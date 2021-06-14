import {combineReducers} from 'redux';
import alertReducer from './alertReducer';
import carReducer from './carReducer';

export default combineReducers({
  alert: alertReducer,
  garage: carReducer,
});

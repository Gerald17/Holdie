/**
 * ./app/reducers/index.js
 */
import { combineReducers } from 'redux';
import { isLoadingSession, session } from './init';
import routes from './routes';

export default combineReducers({
  routes,
  isLoadingSession,
  session

});

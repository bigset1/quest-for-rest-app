import {combineReducers} from 'redux';
import runtime from './runtime';
import quests from './quests';

export default combineReducers({
  runtime,
  quests
});

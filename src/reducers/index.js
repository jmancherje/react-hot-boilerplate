import { combineReducers } from 'redux';
import fourSquareReducer from './reducer_fourSquareActivities';
console.log(fourSquareReducer);

const rootReducer = combineReducers({
  fourSquarePopular: fourSquareReducer
});

export default rootReducer;
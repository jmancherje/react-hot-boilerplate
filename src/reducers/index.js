import { combineReducers } from 'redux';
import BooksReducer from './reducer_test';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
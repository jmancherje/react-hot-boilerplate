import { FETCH_POPULAR } from '../actions/index';
const INITIAL_STATE = { popular: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POPULAR:
      return { ...state, popular: action.payload.data };
    default:
      return state;
  }
}
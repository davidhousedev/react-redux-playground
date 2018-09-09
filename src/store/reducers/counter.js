import { combineReducers } from 'redux';
import { counterActions } from '../constants/action-types'
import uuid from 'uuid/v4'

const rootReducer = (state = { byUid: {} }, action) => {
  switch (action.type) {
    case counterActions.INCREMENT:
      return {
        ...state,
        byUid: {
          ...state.byUid,
          [action.payload]: state.byUid[action.payload] + 1,
        }
      };
    case counterActions.DECREMENT:
      return {
        ...state,
        byUid: {
          ...state.byUid,
          [action.payload]: state.byUid[action.payload] - 1,
        }
      };
    case counterActions.ADD_COUNTER:
      return {
        ...state,
        byUid: {
          ...state.byUid,
          [uuid()]: 0,
        }
      };
    case counterActions.REMOVE_COUNTER:
      const { [action.payload]: value, ...remaining } = state.byUid;
      return {
        ...state,
        byUid: remaining
      };
    default:
      return state;
  }
};

export default combineReducers({
  counters: rootReducer
});

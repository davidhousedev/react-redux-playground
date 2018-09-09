import { counterActions } from '../constants/action-types';

export const increment = uid => ({
  type: counterActions.INCREMENT,
  payload: uid
});

export const decrement = uid => ({
  type: counterActions.DECREMENT,
  payload: uid
});

export const addCounter = () => ({
  type: counterActions.ADD_COUNTER,
});

export const removeCounter = uid => ({
  type: counterActions.REMOVE_COUNTER,
  payload: uid,
});

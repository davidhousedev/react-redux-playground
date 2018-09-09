import test from 'ava';
import uuid from 'uuid/v4';
import deepFreeze from 'deep-freeze';
import { increment, decrement, addCounter, removeCounter } from '../actions/counter';
import rootReducer from './counter';

const counterState = (uid, val = 0) => ({counters: { byUid: { [uid]: val }}});

test('I can increment and decrement a single counter', t => {
  const uid = uuid();
  const initialState = deepFreeze(counterState(uid));
  t.deepEqual(rootReducer(initialState, increment(uid)), counterState(uid, 1));
  t.deepEqual(rootReducer(initialState, decrement(uid)), counterState(uid, -1));
  t.deepEqual(rootReducer(initialState, { type: 'Arbitrary type' }), counterState(uid));
  t.deepEqual(rootReducer(undefined, { type: 'Arbitrary type' }), { counters: { byUid: {} } });
});

test('I can add a counter and it appears in the counter state', t => {
  const newState = rootReducer(undefined, addCounter());
  t.truthy(newState.counters.byUid);
  const newUid = Object.keys(newState.counters.byUid)[0];
  t.truthy(newUid);
  t.deepEqual(newState.counters.byUid[newUid], 0)
});

test('I can remove a counter from the counter state', t => {
  const newState = deepFreeze(rootReducer(undefined, addCounter()));
  const createdUid = Object.keys(newState.counters.byUid)[0];
  const finalState = rootReducer(newState, removeCounter(createdUid));
  t.notDeepEqual(newState, finalState);
  t.deepEqual(Object.keys(finalState.counters.byUid).length, 0);
});

test('I can remove a counter from state without affecting other counters', t => {
  const newState = deepFreeze(rootReducer(rootReducer(undefined, addCounter()), addCounter()));
  const counterUids = Object.keys(newState.counters.byUid);
  t.deepEqual(counterUids.length, 2);
  const [uid1, uid2] = counterUids;
  let finalState = rootReducer(newState, increment(uid2));
  finalState = rootReducer(finalState, removeCounter(uid1));
  t.falsy(finalState.counters.byUid[uid1]);
  t.truthy(finalState.counters.byUid[uid2]);
});

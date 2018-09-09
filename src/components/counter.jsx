import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, removeCounter } from '../store/actions/counter';

const Counter = ({
  onDecrement,
  onDelete,
  onIncrement,
  counters,
  counterId,
}) => (
  <div>
    {counters[counterId]}
    <button onClick={() => onIncrement(counterId)}>increment</button>
    <button onClick={() => onDecrement(counterId)}>decrement</button>
    <button onClick={() => onDelete(counterId)}>delete me</button>
  </div>
);

Counter.defaultProps = {
  counters: {},
};

Counter.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  counters: PropTypes.objectOf(PropTypes.number),
  counterId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  counters: state.counters.byUid,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: uid => dispatch(increment(uid)),
  onDecrement: uid => dispatch(decrement(uid)),
  onDelete: uid => dispatch(removeCounter(uid)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

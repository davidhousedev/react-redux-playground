import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Counter from '../components/counter'
import { addCounter } from '../store/actions/counter';

const CounterPage = ({ counters, onAddNewCounter }) => (
  <div className="counters">
    <button onClick={onAddNewCounter}>Add new counter</button>
    {Object.keys(counters).map(counterId => <Counter counterId={counterId} />)}
  </div>
);

CounterPage.propTypes = {
  counters: PropTypes.objectOf(PropTypes.number),
  onAddNewCounter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counters: state.counters.byUid,
});

const mapDispatchToProps = dispatch => ({
  onAddNewCounter: () => dispatch(addCounter()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);

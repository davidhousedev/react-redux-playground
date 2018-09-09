import React, { Component } from 'react';
import { Provider } from 'react-redux';
import StateInspector from './state-inspector';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <StateInspector />
      </Provider>
    );
  }
}
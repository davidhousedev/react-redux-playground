import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CounterPage from './counter-page';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <CounterPage />
      </Provider>
    );
  }
}

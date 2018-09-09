import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import CounterPage from './counter-page';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <CounterPage />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

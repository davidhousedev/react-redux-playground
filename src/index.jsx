import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root';
import configureStore from './store/state'

require('./styles/main.scss');

const store = configureStore();

let reactRoot = document.createElement('div');
reactRoot.id = 'react-root';
let bodyRoot = document.getElementsByTagName('body');
bodyRoot[0].appendChild(reactRoot);

render(<Root store={store} />, document.getElementById('react-root'));

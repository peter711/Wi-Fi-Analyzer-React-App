import React from 'react';
import ReactDOM from 'react-dom';

import './global-styles';

import App from './App';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <App/>,
    MOUNT_NODE
);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}
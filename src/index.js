import React from 'react';
import ReactDOM from 'react-dom';

import './global-styles';

import App from './App';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <App/>,
    MOUNT_NODE
);

module.hot.accept();
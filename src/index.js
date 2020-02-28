import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';

import App from './container/App';
import reducer from './reducer'
import thunk from 'redux-thunk';

const store = createStore(reducer, {}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));
serviceWorker.unregister();

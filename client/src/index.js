import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';

import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import App from './containers/App';
import mainReducer from './reducers';

const history = createBrowserHistory();
const store = createStore(connectRouter(history)(mainReducer), {}, applyMiddleware(routerMiddleware(history), createLogger(), reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={ history }>
            <App />
        </ConnectedRouter>
    </Provider>,

    document.getElementById('root')
);


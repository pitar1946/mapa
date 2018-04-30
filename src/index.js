import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { BrowserRouter, Route} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import promises from 'redux-promise';
import thunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(promises, thunk));

ReactDOM.render(<Provider store={store}>
                  <App />
                 </Provider>, document.getElementById('root'));

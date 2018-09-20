import React from 'react';
import {render} from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import Root from "./components/Root"
import {AUTHENTICATED } from "./actions/loginActions"
const user = localStorage.getItem('user');
const store = configureStore();
if(user) {
  store.dispatch({ type: AUTHENTICATED });
}

render(
	<Root store={store} />,
	document.getElementById('root'));

registerServiceWorker();

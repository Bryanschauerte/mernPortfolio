import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import routes from "./modules/routes";
import makeStore from "./logic/store";
import { Provider } from 'react-redux';
import {setState} from './logic/action_creators';

const store = makeStore();
store.dispatch(setState());

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>
  ,
   document.getElementById('app')
 )
// NODE_ENV=production npm start  set the var to production then start

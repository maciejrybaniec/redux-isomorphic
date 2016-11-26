import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import Main from 'Components/Main';
import Users from 'Components/Users';
import configureStore from './Store';

const initialState = {
    users: ['John', 'Bob', 'Tony', 'Merry']
};

const store = configureStore(initialState);

render((
  <Provider store={store}>
     <Router history={browserHistory}>
         <Route path="/" component={Main}>
             <Route path="page" component={Users} />
         </Route>
     </Router>
  </Provider>
), document.getElementById('root'));

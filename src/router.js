import express from 'express';
import React from 'react';
import ReactServerDOM from 'react-dom/server';
import { Provider } from 'react-redux';

import { renderPage } from './common';

import Main from './Components/Main';
import Users from './Components/Users';
import configureStore from './Store';

const router = express.Router();

router.get('/page', (req, res) => {
    // Fetch data from database.
    const initialState = {
        users: ['John', 'Bob', 'Tony']
    };

     const store = configureStore(initialState);
     const html = ReactServerDOM.renderToString(
         <Provider store={store}>
             <Main>
                <Users />
             </Main>
         </Provider>
     );

    res.status(200);
    res.send(renderPage(html));
});


module.exports = router;

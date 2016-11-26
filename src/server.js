const express = require('express');
const Router = require('./router');

const PORT = 8000;

const app = express();

app.use('/public', express.static('public'))
app.use('/', Router);

app.listen(PORT);

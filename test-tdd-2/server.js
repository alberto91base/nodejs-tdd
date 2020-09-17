const { default: Axios } = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const { posts } = require('./endpoints');
const { authenticate } = require('./middlewares');
const services = require('./services');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const postsHandlers = posts(services);

app.post('/', authenticate, postsHandlers.post);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;

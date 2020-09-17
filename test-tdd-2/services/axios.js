const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://www.google.es',
});

module.exports = instance;

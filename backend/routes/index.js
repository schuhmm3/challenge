const Router = require("express").Router();
const routes = require('./routes');

Router.use('/', routes);

module.exports = routes;

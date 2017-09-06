const r2base = require('r2base');
const r2middleware = require('r2middleware');
const r2mongoose = require('r2mongoose');
const r2system = require('r2system');
const r2user = require('r2user');
const r2acl = require('r2acl');
const r2query = require('r2query');

const app = r2base();
app.start()
  .serve(r2middleware)
  .serve(r2mongoose)
  .serve(r2system)
  .serve(r2user)
  .serve(r2acl)
  .serve(r2query)
  .load('model')
  .load('discriminator')
  .load('middleware')
  .load('controller')
  .load('routes.js')
  .listen();

module.exports = app;

const r2base = require('r2base');
const r2middleware = require('r2middleware');
const r2mongoose = require('r2mongoose');
const r2system = require('r2system');
const r2user = require('r2user');

const app = r2base();
app.start()
  .serve(r2middleware)
  .serve(r2mongoose)
  .serve(r2system)
  .serve(r2user, { jwt: { secret: '1234', expiresIn: 7 } })
  .load('model')
  .load('service')
  .load('controller')
  .load('routes.js')
  .listen();

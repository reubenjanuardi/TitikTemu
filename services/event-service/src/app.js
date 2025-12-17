// Event Service Application
const express = require('express');

module.exports = (app) => {
  app.use(express.json());
  
  // Routes
  app.use('/events', require('./routes/event.route'));
};

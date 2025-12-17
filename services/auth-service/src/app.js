// Auth Service Application
const express = require('express');

module.exports = (app) => {
  app.use(express.json());
  
  // Routes
  app.use('/auth', require('./routes/auth.route'));
};

// Venue Consumer Service Application
const express = require('express');

module.exports = (app) => {
  app.use(express.json());
  
  // Routes
  app.use('/reservations', require('./routes/reservation.route'));
};

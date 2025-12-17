// Attendance Service Application
const express = require('express');

module.exports = (app) => {
  app.use(express.json());
  
  // Routes
  app.use('/attendance', require('./routes/attendance.route'));
};

// API Gateway Application
module.exports = (app) => {
  // Middleware setup
  app.use(require('express').json());
  
  // Routes will be imported here
  // app.use('/api/auth', require('./routes/auth.route'));
  // app.use('/api/event', require('./routes/event.route'));
  // app.use('/api/venue', require('./routes/venue.route'));
  // app.use('/api/attendance', require('./routes/attendance.route'));
};

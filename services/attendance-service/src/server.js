// Attendance Service Server
const express = require('express');
const app = express();

require('./app')(app);

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log(`Attendance Service running on port ${PORT}`);
});

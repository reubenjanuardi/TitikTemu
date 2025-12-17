// API Gateway Server
const express = require('express');
const app = express();

// Initialize app
require('./app')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});

// Auth Service Server
const express = require('express');
const app = express();

require('./app')(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});

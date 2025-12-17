// Venue Consumer Service Server
const express = require('express');
const app = express();

require('./app')(app);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Venue Consumer Service running on port ${PORT}`);
});

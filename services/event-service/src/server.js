// Event Service Server
const express = require('express');
const app = express();

require('./app')(app);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Event Service running on port ${PORT}`);
});

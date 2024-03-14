const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is the back-end of our 3-tier application.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


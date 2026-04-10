const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Zubair Ahmad Finally Done the Project AWS DevOps Demo 🚀 Running on Kubernetes');
});

app.listen(3000);
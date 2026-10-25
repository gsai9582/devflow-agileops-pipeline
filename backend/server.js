const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'Setup CI/CD Pipeline', status: 'completed' },
    { id: 2, title: 'Configure GitHub Actions', status: 'in-progress' },
    { id: 3, title: 'Deploy to Staging', status: 'pending' }
  ]);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

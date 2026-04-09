const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🚀 CI/CD Pipeline — Node.js App is Live!',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'GitHub Actions', category: 'CI/CD' },
    { id: 2, name: 'Docker',         category: 'Containerization' },
    { id: 3, name: 'Node.js',        category: 'Runtime' },
    { id: 4, name: 'DockerHub',      category: 'Registry' },
  ];
  res.json({ success: true, data: items });
});

app.post('/api/items', (req, res) => {
  const { name, category } = req.body;
  if (!name || !category) {
    return res.status(400).json({ error: 'name and category are required' });
  }
  res.status(201).json({ success: true, data: { id: Date.now(), name, category } });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;

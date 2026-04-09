const request = require('supertest');
const app = require('../src/app');

describe('CI/CD Node.js App — API Tests', () => {

  describe('GET /', () => {
    it('should return 200 with app info', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('message');
      expect(res.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /health', () => {
    it('should return healthy status', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('healthy');
    });
  });

  describe('GET /api/items', () => {
    it('should return a list of items', async () => {
      const res = await request(app).get('/api/items');
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });
  });

  describe('POST /api/items', () => {
    it('should create a new item', async () => {
      const res = await request(app)
        .post('/api/items')
        .send({ name: 'Kubernetes', category: 'Orchestration' });
      expect(res.statusCode).toBe(201);
      expect(res.body.success).toBe(true);
    });

    it('should return 400 when fields are missing', async () => {
      const res = await request(app)
        .post('/api/items')
        .send({ category: 'Orchestration' });
      expect(res.statusCode).toBe(400);
    });
  });

});

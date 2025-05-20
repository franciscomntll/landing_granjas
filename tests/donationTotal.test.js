import request from 'supertest';
import express from 'express';
import handler from '../pages/api/donation/total';
import { ModeloDonation } from '../db/Models/schemaDonation';

jest.mock('../db/Models/schemaDonation', () => ({
  ModeloDonation: { find: jest.fn() }
}));

const app = express();
app.get('/api/donation/total', (req, res) => handler(req, res));

describe('GET /api/donation/total', () => {
  it('returns sum of donation amounts', async () => {
    ModeloDonation.find.mockResolvedValue([
      { amount: 10 },
      { amount: 20 },
      { amount: 5 }
    ]);

    const res = await request(app).get('/api/donation/total');
    expect(res.status).toBe(200);
    expect(res.body.totalDonado).toBe(35);
  });
});

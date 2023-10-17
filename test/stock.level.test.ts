import { expect } from 'chai';
import request from 'supertest';
import app from '../app';

describe('GET /', () => {
    it('should return the current stock level for a valid SKU', (done) => {
        const sku = 'DOK019240/66/49';
        request(app)
            .get(`/api/stock?sku=${sku}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.have.property('sku', sku);
                expect(res.body).to.have.property('qty').to.be.a('number');
                done();
            });
    });

    it('should return an error for an invalid SKU', (done) => {
        const sku = 'InvalidSKU';
        request(app)
            .get(`/api/stock?sku=${sku}`)
            .expect(500)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.have.property('error');
                done();
            });
    });
});
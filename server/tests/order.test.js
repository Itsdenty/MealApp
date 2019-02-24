import { expect } from 'chai';
import request from 'supertest';
import app from '../index';

/**
 *
 *
 * @returns {String} fstring
 */

describe('User API endpoints integration Tests', () => {
  const order = {
      order: {
        mealId: 1,
      }
    },
    order400 = {
      order: {
        mealId: 'cool',
      }
    },
    login = {
      login: {
        email: 'dent4real@yahoo.com',
        password: 'oloreofe'
      }
    },
    token401 = 'awesome-token-for-us',
    orderUpdate = {
      order: {
        mealId: 2,
        isCancelled: true,
        isDelivered: true,
      }
    },
    orderUpdate400 = {
      order: {
        mealId: 0,
        isCancelled: 5000,
      }
    };
  let orderId = '',
    token = '';

  describe('#POST / user login', () => {
    it('should login a user', (done) => {
      request(app).post('/api/v1/user/login').send(login)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.be.an('object');
          expect(res.body.status).to.equal(200);
          token = `Bearer ${res.body.data.token}`;
          done();
        });
    });
  });

  // create order tests
  describe('#POST / order', () => {
    it('should create a order', (done) => {
      request(app).post('/api/v1/order').send(order)
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.be.an('object');
          orderId = res.body.data.id;
          done();
        });
    });
  });

  describe('#POST / order', () => {
    it('should throw a 400 error for a order creation', (done) => {
      request(app).post('/api/v1/order').send(order400)
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(400);
          expect(res.body.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('valid');
          done();
        });
    });
  });

  describe('#POST / order', () => {
    it('should throw a 401 error for order creation', (done) => {
      request(app).post('/api/v1/order').send(order)
        .set('Authorization', token401)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(401);
          expect(res.body.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('malformed');
          done();
        });
    });
  });

  describe('#POST / order', () => {
    it('should throw a 403 error for order creation', (done) => {
      request(app).post('/api/v1/order').send(order)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(403);
          expect(res.body.status).to.equal(403);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('provided');
          done();
        });
    });
  });

  // get all orders tests
  describe('#GET / order', () => {
    it('should get all orders', (done) => {
      request(app).get('/api/v1/order')
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data.orders[0]).to.be.an('object');
          done();
        });
    });
  });

  describe('#GET / order', () => {
    it('should throw a 401 error for getting all orders', (done) => {
      request(app).get('/api/v1/order')
        .set('Authorization', token401)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(401);
          expect(res.body.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('malformed');
          done();
        });
    });
  });

  describe('#GET / order', () => {
    it('should throw a 403 error for creating a order', (done) => {
      request(app).get('/api/v1/order')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(403);
          expect(res.body.status).to.equal(403);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('provided');
          done();
        });
    });
  });

  // update a single order tests
  describe('#PUT / order', () => {
    it('should update an existing order', (done) => {
      request(app).put(`/api/v1/order/${orderId}`).send(orderUpdate)
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.be.an('object');
          expect(res.body.data.message).to.have.string('updated');
          done();
        });
    });
  });

  describe('#PUT / ', () => {
    it('should throw a 400 error for updating a single order', (done) => {
      request(app).put('/api/v1/order/some').send(orderUpdate400)
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(400);
          expect(res.body.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('valid');
          done();
        });
    });
  });
  describe('#PUT / order', () => {
    it('should throw a 401 error for updating a single order', (done) => {
      request(app).put(`/api/v1/order/${orderId}`).send(orderUpdate)
        .set('Authorization', token401)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(401);
          expect(res.body.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('malformed');
          done();
        });
    });
  });
  describe('#PUT / order', () => {
    it('should throw a 500 error for updating a single order', (done) => {
      request(app).put('/api/v1/order/5000005').send(orderUpdate)
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(500);
          expect(res.body.status).to.equal(500);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('error');
          done();
        });
    });
  });
  describe('#PUT / order', () => {
    it('should throw a 403 error for updating a single order', (done) => {
      request(app).put(`/api/v1/order/${orderId}`).send(orderUpdate)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(403);
          expect(res.body.status).to.equal(403);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('provided');
          done();
        });
    });
  });
});

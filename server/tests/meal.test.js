import { expect } from 'chai';
import request from 'supertest';
import app from '../index';

/**
 *
 *
 * @returns {String} fstring
 */

describe('User API endpoints integration Tests', () => {
  const meal = {
      meal: {
        price: 500,
        name: 'Ofada Rice with diced beef stew',
        description: 'A delicious ofada rice with diced beef stew',
        isMenu: true,
        type: 'African',
        promo: 'none'
      }
    },
    meal400 = {
      meal: {
        price: 0,
        name: 'Ofada Rice with diced beef stew',
        description: 'A delicious ofada rice with diced beef stew',
        isMenu: 'nice',
        type: 'African Delight',
        promo: 'none'
      }
    },
    login = {
      login: {
        email: 'dent4real@yahoo.com',
        password: 'oloreofe'
      }
    },
    token401 = 'awesome-token-for-us',
    mealUpdate = {
      meal: {
        price: 400,
        name: 'Ofada Rice with diced beef stew',
        description: 'A delicious ofada rice with diced beef stew',
        isMenu: true,
        type: 'African',
        promo: 'none'
      }
    },
    mealUpdate400 = {
      meal: {
        price: 0,
        name: 5000,
        description: 'A delicious ofada rice with diced beef stew',
        isMenu: true,
        type: 'African Delight',
        promo: 'none'
      }
    };
  let mealId = '',
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

  // create meal tests
  describe('#POST / meal', () => {
    it('should create a meal', (done) => {
      request(app).post('/api/v1/meal').send(meal)
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          console.log(res.body);
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.be.an('object');
          mealId = res.body.data.id;
          done();
        });
    });
  });

  describe('#POST / meal', () => {
    it('should throw a 400 error for a meal creation', (done) => {
      request(app).post('/api/v1/meal').send(meal400)
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

  describe('#POST / meal', () => {
    it('should throw a 401 error for meal creation', (done) => {
      request(app).post('/api/v1/meal').send(meal)
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

  describe('#POST / meal', () => {
    it('should throw a 403 error for meal creation', (done) => {
      request(app).post('/api/v1/meal').send(meal)
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

  // get all meals tests
  describe('#GET / meal', () => {
    it('should get all meals', (done) => {
      request(app).get('/api/v1/meal')
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal(200);
          expect(res.body).to.be.an('object');
          console.log(res.body.data);
          expect(res.body.data.meals[0]).to.be.an('object');
          expect(res.body.data.meals[0].name).to.have.string('smoothie');
          done();
        });
    });
  });

  describe('#GET / meal', () => {
    it('should throw a 401 error for getting all meals', (done) => {
      request(app).get('/api/v1/meal')
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

  describe('#GET / meal', () => {
    it('should throw a 403 error for creating a meal', (done) => {
      request(app).get('/api/v1/meal')
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

  // update a single meal tests
  describe('#PUT / meal', () => {
    it('should update an existing meal', (done) => {
      request(app).put(`/api/v1/meal/${mealId}`).send(mealUpdate)
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
    it('should throw a 400 error for updating a single meal', (done) => {
      request(app).put('/api/v1/meal/some').send(mealUpdate400)
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
  describe('#PUT / meal', () => {
    it('should throw a 401 error for updating a single meal', (done) => {
      request(app).put(`/api/v1/meal/${mealId}`).send(mealUpdate)
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
  describe('#PUT / meal', () => {
    it('should throw a 500 error for updating a single meal', (done) => {
      request(app).put('/api/v1/meal/5000005').send(mealUpdate)
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          console.log(res.body);
          expect(res.statusCode).to.equal(500);
          expect(res.body.status).to.equal(500);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('error');
          done();
        });
    });
  });
  describe('#PUT / meal', () => {
    it('should throw a 403 error for updating a single meal', (done) => {
      request(app).put(`/api/v1/meal/${mealId}`).send(mealUpdate)
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

  // delete a meal tests
  describe('#DELETE / meal', () => {
    it('should delete a meal', (done) => {
      request(app).delete(`/api/v1/meal/${mealId}`)
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.be.an('object');
          expect(res.body.data.message).to.have.string('deleted');
          done();
        });
    });
  });

  describe('#DELETE / meal', () => {
    it('should throw a 400 error for deleting a single meal', (done) => {
      request(app).delete('/api/v1/meal/some')
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

  describe('#DELETE / meal', () => {
    it('should throw a 500 error for deleting a single meal', (done) => {
      request(app).delete('/api/v1/meal/5000000')
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

  describe('#DELETE / meal', () => {
    it('should throw a 401 error for deleting a single meal', (done) => {
      request(app).delete(`/api/v1/meal/${mealId}`)
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

  describe('#DELETE / meals', () => {
    it('should throw a 403 error for deleting a single meal', (done) => {
      request(app).delete(`/api/v1/meal/${mealId}`)
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

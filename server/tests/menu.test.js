import { expect } from 'chai';
import request from 'supertest';
import app from '../index';

/**
 *
 *
 * @returns {String} fstring
 */

describe('User API endpoints integration Tests', () => {
  const login = {
      login: {
        email: 'dent4real@yahoo.com',
        password: 'oloreofe'
      }
    },
    token401 = 'awesome-token-for-us',
    menuUpdate = {
      menu: {
        price: 400,
        name: 'Ofada Rice with diced beef stew',
        description: 'A delicious ofada rice with diced beef stew',
        ismenu: true,
        type: 'African',
        promo: 'none'
      }
    };
  let token = '';

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

  // get all menus tests
  describe('#GET / menu', () => {
    it('should get all menus', (done) => {
      request(app).get('/api/v1/menu')
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal(200);
          expect(res.body).to.be.an('object');
          console.log(res.body.data);
          expect(res.body.data.menu[0]).to.be.an('object');
          expect(res.body.data.menu[0].name).to.have.string('smoothie');
          done();
        });
    });
  });

  describe('#GET / menu', () => {
    it('should throw a 401 error for getting all menus', (done) => {
      request(app).get('/api/v1/menu')
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

  describe('#GET / menu', () => {
    it('should throw a 403 error for creating a menu', (done) => {
      request(app).get('/api/v1/menu')
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

  // update a single menu tests
  describe('#PATCH / menu', () => {
    it('should update an existing menu', (done) => {
      request(app).patch('/api/v1/menu/2').send(menuUpdate)
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.be.an('object');
          expect(res.body.data.message).to.have.string('created');
          done();
        });
    });
  });

  describe('#PATCH /menu ', () => {
    it('should throw a 400 error for updating a single menu', (done) => {
      request(app).patch('/api/v1/menu/some')
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
  describe('#PATCH / menu', () => {
    it('should throw a 401 error for updating a single menu', (done) => {
      request(app).patch('/api/v1/menu/2')
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
  describe('#menu / menu', () => {
    it('should throw a 500 error for updating a single menu', (done) => {
      request(app).patch('/api/v1/menu/5000005')
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
  describe('#menu / menu', () => {
    it('should throw a 403 error for updating a single menu', (done) => {
      request(app).patch('/api/v1/menu/2')
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

  // delete a menu tests
  describe('#DELETE / menu', () => {
    it('should delete a menu', (done) => {
      request(app).delete('/api/v1/menu/2')
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

  describe('#DELETE / menu', () => {
    it('should throw a 400 error for deleting a single menu', (done) => {
      request(app).delete('/api/v1/menu/some')
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

  describe('#DELETE / menu', () => {
    it('should throw a 500 error for deleting a single menu', (done) => {
      request(app).delete('/api/v1/menu/5000000')
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

  describe('#DELETE / menu', () => {
    it('should throw a 401 error for deleting a single menu', (done) => {
      request(app).delete('/api/v1/menu/2')
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

  describe('#DELETE / menus', () => {
    it('should throw a 403 error for deleting a single menu', (done) => {
      request(app).delete('/api/v1/menu/2')
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

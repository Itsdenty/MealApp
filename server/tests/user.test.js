import { expect } from 'chai';
import request from 'supertest';
import app from '../index';

/**
 *
 *
 * @returns {String} fstring
 */
function generateDummyName() {
  const xterBank = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let fstring = '';
  for (let i = 0; i < 7; i += 1) {
    fstring += xterBank[parseInt(Math.random() * 52, 10)];
  }
  return fstring;
}
const generateRandomNumber = (min, max) => Math.random() * (max - min) + min,
  phone = parseInt(generateRandomNumber(1111, 9999), 10);
const
  emailFrag1 = generateDummyName(),
  emailFrag2 = emailFrag1.substring(0, 4),
  email = `${emailFrag1}@${emailFrag2}.com`;

console.log(phone);
describe('User API endpoints intgeration Tests', () => {
  const user = {
    user: {
      firstName: 'test-firstname',
      lastName: 'test-lastname',
      phoneNumber: `0806547${phone}`,
      roleId: 2,
      password: 'password1234',
      address: 'No 32, peace avenue lagos',
      email,
    }
  };
  const user400 = {
    user: {
      firstName: 'ok',
      lastName: 'te',
      roleId: 2,
      password: 'pa',
      phoneNumber: '0806547893',
      address: 'No 32, peace avenue lagos',
      email,
    }
  };
  const login = {
    login: {
      email,
      password: 'password1234',
    }
  };

  const login400 = {
    login: {
      email,
      password: 123,
    }
  };

  const login500 = {
    login: {
      email: 'dent4real@gmail.com',
      password: 'password1234',
    }
  };

  const login502 = {
    login: {
      email,
      password: 'cool-password',
    }
  };

  describe('#POST / user', () => {
    it('should create a single user', (done) => {
      request(app).post('/api/v1/user/signup').send(user)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.be.an('object');
          expect(res.body.status).to.equal(200);
          done();
        });
    });
  });

  describe('#POST / user', () => {
    it('should throw a user creation error', (done) => {
      request(app).post('/api/v1/user/signup').send(user)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(500);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('occured');
          expect(res.body.status).to.equal(500);
          done();
        });
    });
  });

  describe('#POST / user', () => {
    it('should throw a validation error during user creation', (done) => {
      request(app).post('/api/v1/user/signup').send(user400)
        .end((err, res) => {
          if (err) return done(err);
          console.log(res.body);
          expect(res.statusCode).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('valid');
          expect(res.body.status).to.equal(400);
          done();
        });
    });
  });

  describe('#POST / user login', () => {
    it('should login a user', (done) => {
      request(app).post('/api/v1/user/login').send(login)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.be.an('object');
          expect(res.body.status).to.equal(200);
          user.user = res.body.payload;
          done();
        });
    });
  });

  describe('#POST / user login', () => {
    it('should throw login 400 error a user', (done) => {
      request(app).post('/api/v1/user/login').send(login400)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('valid');
          expect(res.body.status).to.equal(400);
          user.user = res.body.payload;
          done();
        });
    });
  });

  describe('#POST / user login', () => {
    it('should throw login 500 error a user', (done) => {
      request(app).post('/api/v1/user/login').send(login500)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(500);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('error occured');
          expect(res.body.status).to.equal(500);
          user.user = res.body.payload;
          done();
        });
    });
  });

  describe('#POST / user login', () => {
    it('should throw login 500 error a user', (done) => {
      request(app).post('/api/v1/user/login').send(login502)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(500);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.have.string('error occured');
          expect(res.body.status).to.equal(500);
          user.user = res.body.payload;
          done();
        });
    });
  });
});
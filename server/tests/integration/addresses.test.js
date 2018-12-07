const request = require('supertest');
const app = require('../../app');
const truncate = require('../truncate');
const { Address } = require('../../models');

const rootPath = '/addresses';

describe('/addresses', async () => {

  beforeEach((done) => {
    truncate().then(() => done());
  });

  afterAll(() => {
    //return Address.sequelize.close();
  });

  describe('GET /', () => {
    it('should get the first address', (done) => {
      request(app).get(rootPath + '/1')
        .expect(200);
        done();
    });
    it('should get all addresses', (done) => {
      request(app).get(rootPath)
        .expect(200);
        done();
    });
    it('should return an error (invalid id)', (done) => {
      request(app).get(rootPath + '/99')
        .expect(304);
        done();
    });
    it('should get all addresses for user', (done) => {
      request(app).get(rootPath + '/1' + '/customer')
        .expect(200);
        done();
    });
  });

  describe('POST /', () => {
    it('should create one address', (done) => {
      request(app).post(rootPath).send({
          email: 'troll@demo.com',
          password: 'secure',
          street1: 'Doe St',
          street2: 'Apt C',
          city: 'Oakland',
          state: 'California',
          zip: '94528',
        })
        .expect(200);
        done();
    });
    it('should create one address then fail because it is the same address', () => {
      request(app).post(rootPath).send({
          email: 'troll@demo.com',
          password: 'secure',
          street1: 'Adam St',
          street2: 'Apt A',
          city: 'Hayward',
          state: 'California',
          zip: '94588',
        })
        .expect(200).then(() => {
          request(app).post(rootPath).send({
              email: 'troll@demo.com',
              password: 'secure',
              street1: 'Adam St',
              street2: 'Apt A',
              city: 'Hayward',
              state: 'California',
              zip: '94588',
            })
            .expect(401);
            done();
        });
    });
  });
});
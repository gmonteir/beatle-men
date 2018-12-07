const request = require('supertest');
const app = require('../../app');
const truncate = require('../truncate');
const { PaymentInfo } = require('../../models');

const rootPath = '/paymentinfo';

describe('/paymentinfo', async () => {

  beforeEach((done) => {
    truncate().then(() => done());
  });

  afterAll(() => {
    //return PaymentInfo.sequelize.close();
  });

  describe('GET /', () => {
    it('should get the first card', (done) => {
      request(app).get(rootPath + '/1')
        .expect(200);
        done();
    });
    it('should get all cards', (done) => {
      request(app).get(rootPath)
        .expect(200);
        done();
    });
    it('should return an error (invalid id)', (done) => {
      request(app).get(rootPath + '/99')
        .expect(304);
        done();
    });
    it('should get all cards for user', (done) => {
      request(app).get(rootPath + '/1' + '/customer')
        .expect(200);
        done();
    });
  });

  describe('POST /', () => {
    it('should create one card', (done) => {
      request(app).post(rootPath).send({
          email: 'troll@demo.com',
          password: 'secure',
          firstName: 'John',
          lastName: 'Doe',
          number: '3829109492049986',
          cvv: '267',
          month: '06',
          year: '2021',
        })
        .expect(200);
        done();
    });
    it('should create one card then fail because it is the same card', () => {
      request(app).post(rootPath).send({
          email: 'troll@demo.com',
          password: 'secure',
          firstName: 'John',
          lastName: 'Doe',
          number: '1780109492049986',
          cvv: '297',
          month: '07',
          year: '2020',
        })
        .expect(200).then(() => {
          request(app).post(rootPath).send({
              email: 'troll@demo.com',
              password: 'secure',
              firstName: 'John',
              lastName: 'Doe',
              number: '1780109492049986',
              cvv: '297',
              month: '07',
              year: '2020',
            })
            .expect(401);
            done();
        });
    });
  });
});
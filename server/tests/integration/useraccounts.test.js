const request = require('supertest');
const app = require('../../app');
const truncate = require('../truncate');
const { UserAccount } = require('../../models');

const rootPath = '/useraccounts';

describe('/useraccounts', async () => {

  beforeEach((done) => {
    truncate().then(() => done());
  });

  afterAll(() => {
    //return UserAccount.sequelize.close();
  });

  describe('POST /', () => {
    it('should create one useraccount', (done) => {
      request(app).post(rootPath).send({
          email: 'test',
        })
        .expect(200);
        done();
    });
    it('should create one useraccount then fail because it has same email', () => {
      request(app).post(rootPath)
        .send({
          email: 'test',
        })
        .expect(200).then(() => {
            request(app).post(rootPath)
              .send({
                email: 'test'
              })
              .expect(401);
              done();
        });
    });

  });
});
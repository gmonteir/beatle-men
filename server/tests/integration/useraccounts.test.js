const request = require('supertest');
const app = require('../../app');
const truncate = require('../truncate');
const { UserAccount } = require('../../models');

const rootPath = '/useraccounts';

describe('/useraccounts', () => {

  beforeEach(() => {
    return truncate();
  });

  afterAll(() => {
    return UserAccount.sequelize.close();
  });

  describe('POST /', () => {
    it('should create one todo item', () => {
      return request(app)
        .post(rootPath)
        .send({
          email: 'test',
        })
        .expect(200)
    });
    it('should create one todo item then fail because it has same email', () => {
      return request(app)
        .post(rootPath)
        .send({
          email: 'test',
        })
        .expect(200)
        .then(() => {
            return request(app)
              .post(rootPath)
              .send({
                email: 'test'
              })
              .expect(401)
        });
    });

    // it('should throw error', () => {
    //   return request(app)
    //     .post(rootPath)
    //     .send({
    //       email: 'test',
    //     })
    //     .expect(404);
    // });
  });
});
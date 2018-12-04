const request = require('supertest');
const app = require('../../app');
const truncate = require('../truncate');
const { Review } = require('../../models');
const { Item } = require('../../models');

const rootPath = '/reviews';

describe('/reviews', () => {

  beforeEach((done) => {
    truncate().then(() => done());
  });

  afterAll(() => {
    //return Review.sequelize.close();
  });

  describe('GET /', () => {
    it('should return an empty array', (done) => {
      request(app).get(rootPath).expect(200).then((response) => {
        expect(response.body.reviews).toEqual([]);
        done();
      });
    });

    it('should create a review an associate with a item', (done) => {
      Item.create({
        name: 'product',
      }).then((item) => {
        request(app).post(rootPath).send({firstName: 'name', rating: 3, description: 'good', itemId: item.id}).expect(200).then((response) => {
          expect(response.body.firstName).toEqual('name');
          done();
        });
      });
    });

    it('should return the created reviews', (done) => {
      Item.create({
        name: 'product',
      }).then((item) => {
        request(app).post(rootPath).send({firstName: 'name', rating: 3, description: 'good', itemId: item.id}).expect(200).then(() => {
          request(app).post(rootPath).send({firstName: 'name2', rating: 5, description: 'amazing', itemId: item.id}).expect(200).then(() => {
            request(app).get(rootPath).send({ItemId: item.id}).expect(200).then((response) => {
              expect(response.body.reviews.length).toEqual(2);
              done();
            });
          });
        });
      });
    });

    it('should delete a review', (done) => {
      Review.create({
        firstName: 'test',
      }).then((created) => {
        request(app).delete(rootPath+'/'+created.id).expect(200).then((response) => {
          expect(response.body.delete).toEqual(true);
          done();
        });
      });
    });
  });
});

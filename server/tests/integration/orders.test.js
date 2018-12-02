const request = require('supertest');
const app = require('../../app');
const truncate = require('../truncate');
const { Order } = require('../../models');
const { UserAccount } = require('../../models');
const { Item } = require('../../models');
const rootPath = '/orders';

describe('/orders', () => {

  beforeEach((done) => {
    truncate().then(() => done());
  });

  afterAll(() => {
    //return Order.sequelize.close();
  });

  describe('GET /', () => {
    it('should return an empty array', (done) => {
      request(app).get(rootPath).expect(200).then((response) => {
        expect(response.body.orders).toEqual([]);
        done();
      });
    });

    it('should return 1 order in the array', (done) => {
      Order.create({
        status: 'test',
      }).then(() => {
        request(app).get(rootPath).expect(200).then((response) => {
          expect(response.body.orders.length).toEqual(1);
          done();
        });
      });
    });

    it('should return the order created', (done) => {
      Order.create({
        status: 'test',
      }).then((created) => {
        request(app).get(rootPath+'/'+created.id).expect(200).then((response) => {
          expect(response.body.status).toEqual('test');
          done();
        });
      });
    });

    it('should delete 1 order', (done) => {
      Order.create({
        status: 'test',
      }).then((created) => {
        request(app).delete(rootPath+'/'+created.id).expect(200).then((response) => {
          expect(response.body.delete).toEqual(true);
          done();
        });
      });
    });

    it('should update a created order', (done) => {
      Order.create({
        status: 'test',
      }).then((created) => {
        request(app).put(rootPath+'/'+created.id).send({status: 'updated'}).expect(200).then((response) =>{
          expect(response.body.status).toEqual('updated');
          done();
        });
      });
    });
  });
  describe('POST /', () => {
    it('should create an order with item and quantity', (done) => {
      UserAccount.create({
        email: 'test',
      }).then((userAccount) => {
        Item.create({
          name: 'product',
          quantity: 100,
          price: 99.99,
        }).then((item) => {
          var userId = userAccount.id;
          var infoArr = {"items": [item.id], "quantities": [3]};
          const info = JSON.stringify(infoArr);
          request(app).post(rootPath).send({userId: userId, info: info}).expect(200).then((response) => {
            expect(response.body.status).toEqual('open');
            done();
          });
        });
      });
    });

    it('should create an order with items and quantities', (done) => {
      UserAccount.create({
        email: 'test',
      }).then((userAccount) => {
        Item.create({
          name: 'product',
          quantity: 83,
          price: 99.99,
        }).then((item_one) => {
          Item.create({
            name: 'product2',
            quantity: 50,
            price: 24.99,
          }).then((item_two) => {
            var userId = userAccount.id;
            var infoArr = {"items": [item_one.id, item_two.id], "quantities": [3, 5]};
            const info = JSON.stringify(infoArr);
            request(app).post(rootPath).send({userId: userId, info: info}).expect(200).then((response) => {
              expect(response.body.status).toEqual('open');
              done();
            });
          });
        });
      });
    });

  });
});
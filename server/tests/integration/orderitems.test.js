const request = require('supertest');
const app = require('../../app');
const truncate = require('../truncate');
const { Order } = require('../../models');
const { UserAccount } = require('../../models');
const { Item } = require('../../models');
const { OrderItem } = require('../../models');
const rootPath = '/orderitems';

describe('/orderitems', () => {

  beforeEach((done) => {
    truncate().then(() => done());
  });

  afterAll(() => {
    //return OrderItem.sequelize.close();
  });

  describe('GET /', () => {
    it('return order items for the order', (done) => {
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
            request(app).post('/orders').send({userId: userId, info: info}).expect(200).then((createdOrder) => {
              Order.create().then((ordertwo) => {
                request(app).get(rootPath).send({orderId: createdOrder.id}).expect(200).then((response) => {
                  expect(response.body.orderItems.length).toEqual(2);
                  done();
                });
              });
            });
          });
        });
      });
    });

    // it('return no orderitems' () => {
    //   OrderItem.create({
    //     quantity: 3,
    //   }).then(() => {
    //     Order.create().then(() => {
    //       request
    //     })
    //   })
    // })
  });
});

const request = require('supertest');
const app = require('../../app');
const truncate = require('../truncate');
const { Order } = require('../../models');
const { UserAccount } = require('../../models');
const { Item } = require('../../models');
const { OrderItem } = require('../../models');
const { Address } = require('../../models');
const { PaymentInfo } = require('../../models');

const rootPath = '/items';

describe('/items', () => {

  beforeEach((done) => {
    truncate().then(() => done());
  });

  afterAll(() => {
    //return Item.sequelize.close();
  });

  describe('GET /', () => {
    it('should return an empty array', (done) => {
      request(app).get(rootPath).expect(200).then((response) => {
        expect(response.body.items).toEqual([]);
        done();
      });
    });

    it('should return 1 item in the array', (done) => {
      Item.create({
        name: 'test',
      }).then(() => {
        request(app).get(rootPath).expect(200).then((response) => {
          expect(response.body.items.length).toEqual(1);
          done();
        });
      });
    });

    it('should return the item created', (done) => {
      Item.create({
        name: 'test',
      }).then((created) => {
        request(app).get(rootPath+'/'+created.id).expect(200).then((response) => {
          expect(response.body.name).toEqual('test');
          done();
        });
      });
    });

    it('should delete 1 item', (done) => {
      Item.create({
        name: 'test',
      }).then((created) => {
        request(app).delete(rootPath+'/'+created.id).expect(200).then((response) => {
          expect(response.body.delete).toEqual(true);
          done(); 
        });
      });
    });

    it('should update a created item', (done) => {
      Item.create({
        name: 'test',
      }).then((created) => {
        request(app).put(rootPath+'/'+created.id).send({name: 'updated'}).expect(200).then((response) =>{
          expect(response.body.name).toEqual('updated');
          done();
        });
      });
    });

    it('should fail to delete item that has been ordered', (done) => {
      Address.create({
        state: 'ca',
      }).then((address) => {
        PaymentInfo.create({
          name: 'test'
        }).then((payment) => {
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
                var infoArrTwo = {"items": [item_one.id, item_two.id], "quantities": [1, 1]};
                //const info = JSON.stringify(infoArr);
                request(app).post('/orders').send({userId: userId, info: infoArr, PaymentInfoId: payment.id, AddressId: address.id}).expect(200).then((orderone) => {
                  request(app).post('/orders').send({userId: userId, info: infoArrTwo, PaymentInfoId: payment.id, AddressId: address.id}).expect(200).then((ordertwo) => {
                    //console.log("created everything that is needed");
                    request(app).delete('/items/'+item_two.id).expect(200).then((response) => {
                      expect(response.body.delete).toEqual(false);
                      done();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });

  });
});
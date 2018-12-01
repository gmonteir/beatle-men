const request = require('supertest');
const app = require('../../app');
const truncate = require('../truncate');
const { Item } = require('../../models');

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
  });
});
const request = require('supertest');
const app = require('../../app');
const truncate = require('../truncate');
const { Item } = require('../../models');

const rootPath = '/items';

describe('/items', () => {

  beforeEach(() => {
    return truncate();
  });

  afterAll(() => {
    return Item.sequelize.close();
  });

  describe('GET /', () => {
    it('should return an empty array', () => {
      return request(app)
        .get(rootPath)
        .expect((response) => {
          return expect(response.body.items).toEqual([]);
        });
    });

    it('should return 1 item in the array', () => {
      return Item.create({
        name: 'test',
      }).then(() => {
        return request(app).get(rootPath).expect((response) => {
          return expect(response.body.items.length).toEqual(1);
        });
      });
    });

    it('should return the item created', () => {
      return Item.create({
        name: 'test',
      }).then((created) => {
        return request(app).get(rootPath+'/'+created.id)
        .expect(200)
        .then((response) => {
          return expect(response.body.name).toEqual('test');
        });
      });
    });

    it('should delete 1 item', () => {
      return Item.create({
        name: 'test',
      }).then((created) => {
        return request(app).delete(rootPath+'/'+created.id).expect((response) => {
          return expect(response.body.delete).toEqual(true);
        });
      });
    });

    it('should update a created item', () => {
      return Item.create({
        name: 'test',
      }).then((created) => {
        return request(app).put(rootPath+'/'+created.id).send({name: 'updated'})
        .expect(200)
        .then((response) =>{
          return expect(response.body.name).toEqual('updated');
        });
      });
    });
  });
});
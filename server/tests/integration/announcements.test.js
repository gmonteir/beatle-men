const request = require('supertest');
const app = require('../../app');
const truncate = require('../truncate');
const { Announcements } = require('../../models');

const rootPath = '/announcements';

describe('/announcements', () => {

  beforeEach((done) => {
    truncate().then(() => done());
  });

  afterAll(() => {
    //return Announcements.sequelize.close();
  });

  describe('GET /', () => {
    it('should return an empty array', (done) => {
      request(app).get(rootPath).expect(200).then((response) => {
        expect(response.body.announcements).toEqual([]);
        done();
      });
    });

    it('should return 2 announcement in the array', (done) => {
      Announcements.create({
        title: 'test',
      }).then(() => {
        Announcements.create({
          title: 'test2'
        }).then(() => {
          request(app).get(rootPath).expect(200).then((response) => {
            expect(response.body.announcements.length).toEqual(2);
            done();
          });
        });
      });
    });

    it('should return the announcement created', (done) => {
      Announcements.create({
        title: 'test',
      }).then((created) => {
        request(app).get(rootPath+'/'+created.id).expect(200).then((response) => {
          expect(response.body.title).toEqual('test');
          done();
        });
      });
    });

    it('should delete 1 announcement', (done) => {
      Announcements.create({
        title: 'test',
      }).then((created) => {
        request(app).delete(rootPath+'/'+created.id).expect(200).then((response) => {
          expect(response.body.delete).toEqual(true);
          done();
        });
      });
    });

    it('should update a created announcement', (done) => {
      Announcements.create({
        title: 'test',
      }).then((created) => {
        request(app).put(rootPath+'/'+created.id).send({title: 'updated'}).expect(200).then((response) =>{
          expect(response.body.title).toEqual('updated');
          done();
        });
      });
    });
  });

  describe('POST /', () => {
    it('should create an announcement', (done) => {
      request(app).post(rootPath).send({
        title: 'test',
        message: 'test message',
      }).expect(200).then((response) => {
        expect(response.body.message).toEqual('test message');
        done();
      });
    });
  });
});

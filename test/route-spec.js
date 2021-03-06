'use strict';

process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app.js')
const { knex } = require('../db/database')
chai.use(chaiHttp)

describe('Zoo Routes', () => {
//   beforeEach( () => {
//     return knex.migrate.rollback()
//     .then( () => {
//       return knex.migrate.latest()
//     })
//     .then( () => {
//       return knex.seed.run()
//     })
//   })

// //test 1 /passing
//   describe('return all animals', () => {
//     it('should return all the animals', () => {
//       return chai.request(server)
//       .get('/api/v1/animals')
//       .then( (res) => {
//         res.should.have.status(200)
//         res.should.be.json
//         res.body.should.be.a('array')
//         res.body[1].should.have.property('name')
//         res.body[1].name.should.equal('Robert')
//         res.body[1].should.have.property('species')
//         res.body[1].species.should.equal('Robert Robert')
//         res.body[1].should.have.property('age')
//         res.body[1].age.should.equal(120)
//       })
//     })
//   })

// //test 2 /passing
//   describe('post a new animal to the database', () => {
//     it('should post a new animal', () => {
//       return chai.request(server)
//       .post('/api/v1/animals/new')
//       .send({
//         name: 'Edgar',
//         species: 'Cow',
//         age: 6
//       })
//       .then( (res) => {
//         res.should.have.status(201)
//         res.should.be.json
//         res.should.be.a('object')
//       })
//     })
//   })

//test 3 /passing
  describe('return all keepers', () => {
    it('should return all keepers', () => {
      return chai.request(server)
      .get('/api/v1/keepers')
      .then( (res) => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('array')
        res.body[0].should.have.property('name')
        res.body[0].name.should.equal('Scott')
      })
    })
  })

// //test 4 /passing
//   describe('post a new keeper to the database', () => {
//     it('should post a new keeper', () => {
//       return chai.request(server)
//       .post('/api/v1/keepers/new')
//       .send({
//         name: 'Ryan',
//       })
//       .then( (res) => {
//         res.should.have.status(201)
//       })
//     })
//   })

// //test 5 /passing
//   describe('return all animals for an keeper', () => {
//     it('should return the animals for an keeper', () => {
//       return chai.request(server)
//       .get('/api/v1/animals/keeper/1')
//       .then( (res) => {
//         res.should.have.status(200)
//       })
//     })
//   })

// //test 6 /passing
//   describe('return all the keepers for a animal', () => {
//     it('should return the keepers for an animal', () => {
//       return chai.request(server)
//       .get('/api/v1/keepers/animal/1')
//       .then( (res) => {
//         res.should.have.status(200)
//       })
//     })
//   })
//
// //test 7 /passing
//   describe('check to see if keeper was removed', () => {
//     it('should see if a keeper was removed', () => {
//       return chai.request(server)
//       .delete('/api/v1/keepers/1')
//       .then( (res) => {
//         res.should.have.status(200)
//         res.should.be.json
//         res.should.be.a('object')
//
//         chai.request(server)
//         .get('/api/v1/keepers')
//         .then( (keepers) => {
//           console.log("hi there")
//           res.should.have.status(200);
//           res.should.be.json
//           res.body.should.be.a('array');
//           res.body.length.should.equal(1);
//           res.body[0].should.have.property('name');
//           res.body[0].name.should.equal('Scott');
//         })
//       })
//     })
//   })

// //test 8 /passing
//   describe('check to see if an animal was removed', () => {
//     it('should see if an animal was removed', () => {
//       return chai.request(server)
//       .delete('/api/v1/animals/3')
//       .then( (res) => {
//         res.should.have.status(200)
//         res.should.be.json
//         res.should.be.a('object')
//
//         chai.request(server)
//         .get('/api/v1/animals')
//         .then( (animals) => {
//           res.should.have.status(200)
//           res.should.be.json
//           res.body.should.be.a('array')
//           res.body[0].should.have.property('name')
//           res.body[0].name.should.equal('Robert')
//           res.body[0].should.have.property('species')
//           res.body[0].species.should.equal('Robert Robert')
//           res.body[0].should.have.property('age')
//           res.body[0].age.should.equal('120')
//         })
//       })
//     })
//   })

}) //end of describe Zoo Routes

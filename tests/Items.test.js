const request = require('supertest');
const app = require('../app')

describe(' Item Crud Operations ', () => {

    it('POST /items -> Should create an item', () => {
        const newItem = { name: "Iron Sword", price: 24 }

        return request(app)
        .post('/items')
        .send(newItem)
        .expect(201)
        .expect('Content-Type', /json/)
        .then(res => {
            expect(res.body).toEqual(newItem)
        })
    })

    it('GET /items -> Should return all items in the collection', () => {
        return request(app)
        .get('/items')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            expect(res.body).toEqual(expect.arrayContaining(expect.objectContaining({
                Name: expect.any(String),
                Price: expect.any(Number)
            })))
        })
    })

    it('GET /items:id -> Should get item by ID', () => {
        return request(app)
        .get('/items/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            expect(res.body).toEqual(expect.objectContaining({
                _id: 1
            }))
        })
    })

    it('PUT /items/:id -> Should update the item by ID', () => {
        const newItem = { Name: "Iron Sword", Price: 24 }
        return request(app)
        .put('/items/1')
        .send(newItem)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(res => {
            expect(res.body).toEqual(newItem)
        })
    })

    it('GET /items/:id -> Delete item by id', () => {
        return request(app)
        .delete('/items/1')
        .expect(200)
    })

})
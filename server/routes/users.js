const express = require('express');
const router = express.Router();

require('dotenv').config();

const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.DB_URL,
    port: 5432,
    user: 'yzlnssfd',
    password: process.env.DB_PASSWORD,
    database: 'yzlnssfd'
});



const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      response.status(error.code).send(error.message);
      // throw error
    }
    response.status(200).json(results.rows)
  })
}


router.get('/', function(req, res, next) {
  // should get the users from the database, not accessible to normal users
  getUsers(req, res);
});

router.get('/:id', function(req, res, next) {
  // should get the user by id
  res.send('respond with a single user by id');
});

router.post('/', function(req, res, next) {
  // should create a new user in the database
  res.send('create a new user in the database');
});

router.put('/:id', function(req, res, next) {
  // should update a user by id
  res.send('update a user by id');
});

router.delete('/:id', function(req, res, next) {
  // should delete a user by id
  res.send('delete a user by id');
});

module.exports = router;

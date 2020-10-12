const { Pool, Client } = require('pg')

const express = require('express');
const app = express();

const config = require('./db');
const PORT = 3000;
const pgPool = new Pool(config);


const pool = new Pool({
  user: 'postgres',
  host: 'users-db',
  database: 'users_dev',
  password: 'postgres',
  port: 5432,
})
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
    console.log(' users-database connected !!')
  })
})


app.get('/', function(req, res) {
    res.json({"microservice": "users"});
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});











































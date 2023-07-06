const Pool = require('pg').Pool;

require('dotenv').config();

const pool = new Pool({
    user: "postgres",
    password: "1999",
    host: "localhost",
    port: 3000,
    database: 'todoapp'
})

module.exports = pool;
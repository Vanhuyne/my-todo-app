const Pool = require('pg').Pool;

require('dotenv').config();

const pool = new Pool({
    user: "QmyTEwABg0CkamXk",
    password: "SRuHviEJ4yqMltKJ",
    host: "todoapp-d5mme-postgresql.todoapp-d5mme.svc.cluster.local",
    port: 5432,
    database: 'todoapp'
})

module.exports = pool;

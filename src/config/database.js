const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'template_api'
});

//exportacao da conexao do baco de dados 
module.exports = pool

import * as mysql from "mysql2";

 const database =  mysql.createPool({
    host: 'localhost',
    user:'root',
    password: '',
    database:'library',
    waitForConnections: true,
    connectionLimit: 10,
});

export default database;

database.execute(`
    CREATE TABLE IF NOT EXISTS Library (
        id_library

    )
`)
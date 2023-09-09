import mysql from "mysql2";

const bank = mysql.createPool({
    host: 'localhost',
    user:'root'
    password: 'root',
    database:'banktds',
    waitForConnections: true,
    connectionLimit: 10,
});


export default bank;
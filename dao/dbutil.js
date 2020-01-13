/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-11 09:59:54
 * @LastEditors: WangQing
 * @LastEditTime: 2020-01-11 10:08:29
 */
let mysql = require('mysql');

function createConnection(){
    let connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'my_blog'
    });
    return connection;
}

module.exports.createConnection = createConnection;
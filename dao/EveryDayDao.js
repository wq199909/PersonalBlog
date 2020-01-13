/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-11 10:05:44
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 10:03:59
 */
let dbutil = require('./dbutil');

function insertEveryDay(name, content, ctime, success){
    let insertSql = "insert into every_day (`name`, `content`, `ctime`) values (?, ?, ?)";
    let params = [name, content, ctime];
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function(err, res){
        if(err == null){
            success(res);
        }else{
            console.log(err);
        }
    })
    connection.end();
}

function queryEveryDay(success){
    let querySql = "select * from every_day order by id desc limit 1;";
    let params = [];
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function(err, res){
        if(err == null){
            success(res);
        }else{
            console.log(err);
        }
    })
    connection.end();
}

module.exports = {
    insertEveryDay,
    queryEveryDay
}
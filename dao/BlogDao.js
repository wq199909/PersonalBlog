/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 10:13:09
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 11:39:37
 */
let dbutil = require('./dbutil');

function insertBlog(title, content, tags, views, ctime, utime, success){
    let insertSql = `insert into blog (title, content, tags, views, ctime, utime) values (?, ?, ?, ?, ?, ?);`;
    let params = [title, content, tags, views, ctime, utime];
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

function queryBlog(success){
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
    insertBlog,
    queryBlog
}
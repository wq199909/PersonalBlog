/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 10:39:03
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 12:02:15
 */
let dbutil = require('./dbutil');

function insertTag(tag, ctime, utime, blog_id, success){
    let insertSql = "insert into tags (tag, ctime, utime) values (?, ?, ?);";
    let params = [tag, ctime, utime];
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function(err, res){
        if(err == null){
            success(res.insertId, blog_id, ctime, utime, function(){});
        }else{
            console.log(err);
        }
    })
    connection.end();
}

function queryTag(tag, now, blog_id, success){
    let querySql = "select * from tags where tag = ?;";
    let params = [tag];
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function(err, res){
        if(err == null){
            if(res.length==0){
                insertTag(tag, now, now, blog_id, success);
            }else{
                success(res[0].id, blog_id, now, now, function(){});
            }
        }else{
            console.log(err);
        }
    })
    connection.end();
}

module.exports = {
    insertTag,
    queryTag
}
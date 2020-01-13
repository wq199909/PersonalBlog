/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 10:13:09
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 13:55:56
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


function queryBlogByPage(page, pageSize, success){
    let querySql = "select * from blog order by id desc limit ?, ?;";
    let params = [page * pageSize, pageSize];
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
    queryBlogByPage
}
/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 10:13:09
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 16:29:12
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

function queryBlogById(id, success){
    let querySql = "select * from blog where id = ?;";
    let params = [id];
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

function queryBlogCount(success){
    let querySql = "select count(1) from blog";
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
    queryBlogByPage,
    queryBlogCount,
    queryBlogById
}
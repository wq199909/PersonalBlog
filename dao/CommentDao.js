/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 19:18:53
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 21:17:23
 */
let dbutil = require("./dbutil");

function insertComments(blogId, parent, content, name, email, ctime, success) {
    let sql = "insert into comments (`blog_id`, `parent`, `comments`, `user_name`, `email`, `ctime`) values (?, ?, ?, ?, ?, ?);";
    let params = [blogId, parent, content, name, email, ctime];
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            success(result);
        }
    });
    connection.end();
}

function queryCommentsById(bid, success){
    let querySql = "select * from comments where blog_id = ?;";
    let params = [bid];
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            success(result);
        }
    });
    connection.end();
}

module.exports = {
    insertComments,
    queryCommentsById
}
/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 19:18:53
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 19:56:22
 */
var dbutil = require("./dbutil");

function insertComments(blogId, parent, content, name, email, ctime, success) {
    var sql = "insert into comments (`blog_id`, `parent`, `comments`, `user_name`, `email`, `ctime`) values (?, ?, ?, ?, ?, ?);";
    var params = [blogId, parent, content, name, email, ctime];
    var connection = dbutil.createConnection();
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

module.exports = {
    insertComments
}
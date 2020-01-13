let dbutil = require('./dbutil');

function insertMapping(tag_id, blog_id, ctime, utime, success){
    let insertSql = "insert into tag_blog_mapping (tag_id, blog_id, ctime, utime) values (?, ?, ?, ?);";
    let params = [tag_id, blog_id, ctime, utime];
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

module.exports = {
    insertMapping
}
/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 19:21:50
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 19:58:36
 */
let url = require("url");
let commentDao = require('../dao/CommentDao');
let respUtil = require("../util/RespUtil");
let path = new Map();
function addComment(request, response){
    let params = url.parse(request.url, true).query;
    let now = (new Date()).getTime();
    commentDao.insertComments(params.blogId, params.parent, params.content, params.user_name, params.email, now, function(res){
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "留言成功", null));
        response.end();
    })
}

path.set("addComment", addComment);

module.exports.path = path;
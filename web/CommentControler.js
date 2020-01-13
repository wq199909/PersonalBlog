/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-13 19:21:50
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 21:11:55
 */
let url = require("url");
let commentDao = require('../dao/CommentDao');
let respUtil = require("../util/RespUtil");
let captcha = require('svg-captcha')
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

function queryRandomCode(request, response) {
    var img = captcha.create({fontSize: 50, width: 100, height: 34});
    response.writeHead(200);
    response.write(respUtil.writeResult("success", "留言成功", img));
    response.end();
}

path.set("queryRandomCode", queryRandomCode);

function getCommentsById(request, response) {
    let params = url.parse(request.url, true).query;
    commentDao.queryCommentsById(params.bid, function(res){
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", res));
        response.end();
    })
}

path.set("getCommentsById", getCommentsById);

module.exports.path = path;
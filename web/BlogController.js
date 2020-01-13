/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-09 11:53:58
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-13 16:40:07
 */
let url = require("url");
let blogDao = require('../dao/BlogDao');
let respUtil = require("../util/RespUtil");
let tagDao = require('../dao/TagDao');
let tagMapBlog = require("../dao/TagBlogMappingDao")

let path = new Map();

function editBlog(request, response){
    let params = url.parse(request.url, true).query;
    params.tags=params.tags.replace(/ /g, "").replace(/[，]/ig, ',');   
    request.on("data", function(data){
        let now;
        blogDao.insertBlog(params.title, data.toString(), params.tags, 0, (now = new Date()).getTime(), now.getTime(), function(res){
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
            let tags = params.tags.split(',');
            for (let tag of tags){
                tagDao.queryTag(tag, now.getTime(), res.insertId, tagMapBlog.insertMapping);
            }
        })
    })
}

path.set("editBlog", editBlog);

function queryBlogByPage(request, response){
    let params = url.parse(request.url, true).query;
    blogDao.queryBlogByPage(parseInt(params.page), parseInt(params.pageSize), function(res){
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", res));
        response.end();
    })
}

path.set("queryBlogByPage", queryBlogByPage);

function queryBlogCount(request, response){
    blogDao.queryBlogCount(function(res){
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", res));
        response.end();
    })
}

path.set("queryBlogCount", queryBlogCount);

function queryBlogById(request, response){
    var params = url.parse(request.url, true).query;
    blogDao.queryBlogById(params.bid, function(res){
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", res));
        response.end();
    })
}

path.set("queryBlogById", queryBlogById);

module.exports.path = path;